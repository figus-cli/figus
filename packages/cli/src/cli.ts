import fse from "fs-extra";
import Queue from "./waterfall/Queue";
import { template } from "@figus/vue";
import { template as reactTemplate } from "@figus/react";
import { divider, spinner } from "@figus/utils";
import { getSvgs, WorkerOptions, writeSvg } from "@figus/svg";
import cac from "cac";
import c from "picocolors";
import { version } from "../../../package.json";
import { Frameworks, Options } from "@figus/types";
import { clean, download, FigmaOptions } from "@figus/figma";
import { template as muiTemplate } from "@figus/react-mui";
import { resolveUserConfig } from "./config";
import inquirer from "inquirer";
import { createConfig } from "./utils/createConfig";
import { getDefaultNameFilter } from "./utils/getDefaultNameFilter";
import rimraf from "rimraf";
import debug from "debug";
import * as process from "process";
import { generateIndex as generateIndexVue } from "@figus/vue";
import { generateIndex as generateIndexReact } from "@figus/react";

const logger = debug("figus");
logger.log = console.log.bind(console); // don't forget to bind to console!

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
    logger(`starting to generate icons for ${framework}`, {
        svgPath,
        svgDir,
        output,
    });
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

async function getTemplate({
    framework,
    templateFile,
}: {
    framework: Frameworks;
    templateFile?: string;
}) {
    if (templateFile && fse.existsSync(templateFile)) {
        return fse.readFileSync(templateFile, "utf-8");
    }
    logger(`Getting template for ${framework}`);
    if (framework === "vue") {
        return template();
    }
    if (framework === "react-mui") {
        return muiTemplate();
    }
    if (framework === "react") {
        return reactTemplate();
    }
}

export async function handler({
    output,
    framework,
    template: templateFile,
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
    const template = await getTemplate({ framework, templateFile });
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
    await generateIndex({ output, framework });
    spinner.succeed("Done!!");
}

async function generateIndex({ output, framework = "vue" }: Partial<Options>) {
    if (framework.startsWith("react")) {
        return await generateIndexReact({ output });
    }
    if (framework === "vue") {
        return await generateIndexVue({ output });
    }
    console.error("Unsupported framework!");
}

async function downloadFigma(options: FigmaOptions & Options) {
    const {
        output,
        path,
        figma: { pageName, fileKey, token } = {},
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
            fileKey,
        },
    });
    spinner.succeed("Done");
}

async function getConfig(options: Options & FigmaOptions): Promise<Options> {
    try {
        const config = await resolveUserConfig();
        logger("Resolving user config");
        return {
            output: options.output || config.output,
            path: options.path || config.path,
            framework: options.framework || config.framework,
            getFileName: config.getFileName,
            template: options.template || config.template,
            figma: {
                token: options.token || config.figma.token,
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
            fileKey: options.fileKey,
            pageName: options.pageName,
        },
    };
}

async function generate(framework: Frameworks, options: Options) {
    try {
        const {
            output,
            path,
            getComponentName,
            getFileName,
            framework: configFramework,
            template,
        } = await getConfig({
            ...options,
            framework,
        });
        logger("generating icons", { options });
        if (!path) {
            logger("couldn't resolve path");
            console.error("Couldn't resolve path");
            return;
        }
        clean();
        spinner.isSpinning
            ? (spinner.text = "Generating icons")
            : spinner.start("Generating icons");
        await handler({
            svgDir: path,
            template,
            output,
            getFileName,
            getComponentName,
            framework: configFramework,
        });
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
        template,
        framework: configFramework,
        figma: { token, fileKey, pageName } = {},
    } = await getConfig(options);
    try {
        const svgDir =
            path ||
            (await download({
                token,
                figma: {
                    pageName,
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
            template,
            getComponentName,
            framework: framework || configFramework,
        });
        clean();
        process.exit(0);
    } catch (e) {
        process.exit(1);
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
                name: "pageName",
                message: "Figma page name that contains the icons",
            },
            {
                type: "input",
                name: "output",
                message: "Output path to save the components in",
            },
        ])
        .then(async ({ output, pageName, fileKey, framework }) => {
            await createConfig({
                output,
                figma: { pageName, fileKey },
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
    .option("-f, --file-key <fileKey>", "figma file key")
    .option("-t --template <template>", "Mustache template file")
    .option("-p, --page-name <pageName>", "figma page name")
    .option("-t, --token <token>", "Figma token");

cli.command(
    "[framework]",
    "Generate components from figma for a specific framework"
)
    .option("-o, --output <string>", "output path")
    .example("--fileKey yyy --token xxx --pageName zzz")
    .action(start);

cli.command("generate [framework]", "generate components from svg files")
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
