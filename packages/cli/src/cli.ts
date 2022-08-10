import fse from "fs-extra";
import Queue from "./waterfall/Queue";
import { template } from "@figus/vue";
import { divider, spinner } from "@figus/utils";
import { getSvgs, WorkerOptions, writeSvg } from "@figus/svg";
import cac from "cac";
import c from "picocolors";
import { version } from "../../../package.json";
import { Frameworks, Options } from "@figus/types";
import { clean, download, FigmaOptions } from "@figus/figma";
import { template as muiTemplate } from "@figus/react-mui";
import fs from "fs";
import { resolveUserConfig } from "./config";
import inquirer from "inquirer";
import { createConfig } from "./utils/createConfig";
import { getDefaultNameFilter } from "./utils/getDefaultNameFilter";
import rimraf from "rimraf";
import debug from "debug";
const downloader = debug("figus:downloader");
const logger = debug("figus");
logger.log = console.log.bind(console); // don't forget to bind to console!
const generator = debug("figus:svg");

async function worker({
    svgPath,
    svgDir,
    output,
    getComponentNameConfig,
    renameFilter,
    framework,
    template,
}: WorkerOptions) {
    spinner.text = "Generating icons";
    await writeSvg({
        svgPath,
        svgDir,
        getComponentNameConfig,
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
    if (framework === "react-mui") {
        return muiTemplate();
    }
}

export async function handler({
    output,
    framework,
    svgDir,
    getFileName,
    getComponentName,
}: Options & { svgDir: string }) {
    rimraf.sync(`${output}/*`); // Clean old files
    if (!output) {
        throw Error("Please provide an output");
    }
    const renameFilter = getDefaultNameFilter(framework);
    await fse.ensureDir(output);
    const template = await getTemplate({ framework });
    const svgPaths = await getSvgs({ svgDir });
    if (!template) {
        return;
    }
    const queue = new Queue(
        (svgPath: string) =>
            worker({
                getComponentNameConfig: getComponentName,
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

async function downloadFigma(options: FigmaOptions & Options) {
    const {
        output,
        path,
        figma: { pageName, imageKey, fileKey, token },
    } = await getConfig(options);
    await clean();
    if (!token) {
        console.log(`Please provide a ${c.red("Figma")} token`);
        return;
    }
    await download({
        token,
        path: path || output,
        figma: {
            pageName,
            imageKey,
            fileKey,
        },
    });
}

async function getConfig(options: Options & FigmaOptions) {
    try {
        const config = await resolveUserConfig();
        logger("Resolving user config");
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
    } catch (e) {
        logger(`${c.red("Error:")} Resolving user config`);
    }
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

async function generate(options: Options) {
    try {
        const { output, path, getComponentName, getFileName, framework } =
            await getConfig(options);
        logger("generating icons");
        if (!path) {
            console.error("Couldn't resolve path");
            return;
        }
        // determine which framework (vue, react, angular)
        // use assets to create components
        await handler({
            svgDir: path,
            output,
            getFileName,
            getComponentName,
            framework: framework,
        });
        fs.rmSync("~/icons/temp", { recursive: true, force: true });
        process.exit();
    } catch (e) {
        console.error(e);
    }
}

async function start(framework: Frameworks, options: Options & FigmaOptions) {
    clean();
    const {
        output,
        path,
        getComponentName,
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

        await handler({
            svgDir,
            output,
            getComponentName,
            framework: framework || configFramework,
        });
        fs.rmSync("~/icons/temp", { recursive: true, force: true });
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
                choices: ["React", "React Mui", "Vue"],
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
