import fse from "fs-extra";
import rimraf from "rimraf";
import Queue from "./waterfall/Queue";
import renameFilterDefault from "./rename-filters";
import { divider, spinner } from "@figus/utils";
import { getSvgs, WorkerOptions, writeSvg } from "@figus/svg";
import cac from "cac";
import c from "picocolors";
import { version } from "../../../package.json";
import { CliOptions, Frameworks } from "@figus/types";
import { clean, download, FigmaOptions } from "@figus/figma";
import { template } from "@figus/vue";
import fs from "fs";
import { resolveUserConfig } from "./config";
import inquirer from "inquirer";
import { RenameFilter } from "../../svg/src";
import { createConfig } from "./utils/createConfig";

async function worker({
    svgPath,
    svgDir,
    output,
    renameFilter,
    framework,
    template,
}: WorkerOptions) {
    spinner.text = "Generating icons";
    await writeSvg({
        svgPath,
        svgDir,
        output,
        renameFilter,
        template,
        framework,
    });
}

async function getTemplate({ framework }: { framework: Frameworks }) {
    if (framework === "vue") {
        return template();
    }
}

export async function handler({
    output,
    framework,
    svgDir,
    getFileName,
    renameFilter,
}: CliOptions & { renameFilter: RenameFilter; svgDir: string }) {
    rimraf.sync(`${output}/*.vue`); // Clean old files
    if (typeof renameFilter !== "function") {
        throw Error("renameFilter must be a function");
    }
    if (!output) {
        throw Error("Please provide an output");
    }
    await fse.ensureDir(output);
    const template = await getTemplate({ framework });
    const svgPaths = await getSvgs({ svgDir });
    if (!template) {
        return;
    }
    const queue = new Queue(
        (svgPath: string) =>
            worker({
                svgPath,
                svgDir,
                framework,
                output,
                renameFilter: getFileName || renameFilter,
                template,
            }),
        { concurrency: 8 }
    );

    queue.push(svgPaths);
    await queue.wait({ empty: true });
    spinner.succeed("Done!!");
}

async function downloadFigma({
    pageName,
    imageKey,
    fileKey,
    output,
    token,
}: FigmaOptions) {
    await clean();
    if (!token) {
        console.log(`Please provide a ${c.red("Figma")} token`);
        return;
    }
    await download({
        token,
        path: output,
        figma: {
            pageName,
            imageKey,
            fileKey,
        },
    });
}

async function getConfig(options: CliOptions & FigmaOptions) {
    try {
        const config = await resolveUserConfig();
        return {
            output: options.output || config.output,
            path: options.path || config.path,
            framework: config.framework,
            getFileName: config.getFileName,
            figma: {
                token: options.token || config.figma.token,
                imageKey: options.imageKey || config.figma.imageKey,
                fileKey: options.fileKey || config.figma.fileKey,
                pageName: options.pageName || config.figma.pageName,
            },
        };
    } catch (e) {}
    return {
        ...options,
        figma: {
            token: options.token,
            imageKey: options.imageKey,
            fileKey: options.fileKey,
            pageName: options.pageName,
        },
    };
}

async function generate(options: CliOptions) {
    const {
        output,
        path,
        getFileName,
        framework: configFramework,
    } = await getConfig(options);
    try {
        if (!path) {
            return;
        }

        // determine which framework (vue, react, angular)
        // use assets to create components
        await handler({
            svgDir: path,
            output,
            getFileName,
            renameFilter: renameFilterDefault,
            framework: configFramework,
        });
        fs.rmSync(path, { recursive: true, force: true });
        process.exit();
    } catch (e) {
        console.log(e);
    }
}

async function start(
    framework: Frameworks,
    options: CliOptions & FigmaOptions
) {
    clean();
    const {
        output,
        path,
        framework: configFramework,
        figma: { token, imageKey, fileKey, pageName },
    } = await getConfig(options);
    try {
        const svgDir =
            path ||
            (await download({
                token,
                figma: {
                    pageName,
                    imageKey,
                    fileKey,
                },
            }));
        if (!svgDir) {
            console.error("error downloading from figma");
            process.exit();
        }
        // download from figma
        const renameFilter = renameFilterDefault;
        // determine which framework (vue, react, angular)
        // use assets to create components
        await handler({
            svgDir,
            output,
            renameFilter,
            framework: framework || configFramework,
        });
        fs.rmSync(svgDir, { recursive: true, force: true });
        process.exit();
    } catch (e) {
        process.exitCode = 1;
        console.error(
            `\n${c.red(divider(c.bold(c.inverse(" Unhandled Error "))))}`
        );
        console.error(e);
        console.error("\n\n");
    }
}

async function init() {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Select framework",
                name: "framework",
                choices: ["React", "Vue"],
            },
            {
                type: "input",
                name: "fileKey",
                message: "Figma file key",
            },
            {
                type: "input",
                name: "imageKey",
                message: "Figma image key",
            },
            {
                type: "input",
                name: "pageName",
                message: "Figma page name that contains the icons",
            },
            {
                type: "input",
                name: "output",
                message: "Output path to save the components in",
            },
        ])
        .then(async ({ output, pageName, imageKey, fileKey, framework }) => {
            await createConfig({
                output,
                figma: { pageName, imageKey, fileKey },
                framework,
            });
            // Use user feedback for... whatever!!
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

const cli = cac("figus");

cli.version(version)
    .option("-s, --svg-dir <svgDir>", "Output of downloaded files")
    .option("-fk, --file-key <fileKey>", "figma file key")
    .option("-ik, --image-key <imageKey>", "figma image key")
    .option("-p, --page-name <pageName>", "figma page name")
    .option("-t, --token <token>", "Figma token");

cli.command(
    "[framework]",
    "Generate components from figma for a specific framework"
)
    .option("-o, --output <string>", "output path")
    .action(start);

cli.command("generate", "generate components from svg files")
    .option("-o, --output <output>", "Download path")
    .option("-p, --path <path>", "Directory containing the svg files")
    .action(generate);

cli.command(
    "download",
    "Download Figma page components as SVGs to a specified location"
)
    .option("-o, --output <string>", "Download path")
    .action(downloadFigma);

cli.command("init", "initialize figus config file").action(init);

cli.help();

cli.parse();
