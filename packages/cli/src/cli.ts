import fse, { readFile } from "fs-extra";
import Queue from "./waterfall/Queue";
import { generateIndex as generateIndexVue, template } from "@figus/vue";
import {
    generateIndex as generateIndexReact,
    template as reactTemplate,
} from "@figus/react";
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
import * as process from "node:process";
import { generateIndex as generateIndexIconify } from "@figus/iconify";
import globAsync from "fast-glob";
import { serve } from "@figus/explorer";
import path from "path";
import { cleanPaths, getComponentName } from "@figus/svg";

const logger = debug("figus");
logger.log = console.log.bind(console); // don't forget to bind to console!
const components: { componentName?: string; paths?: string }[] = [];

async function worker({
    svgPath,
    svgDir,
    output,
    iconify,
    getComponentNameConfig,
    renameFilter,
    framework,
    template,
}: WorkerOptions) {
    logger(`starting to generate icons for ${framework}`, {
        svgPath,
        svgDir,
        output,
    });
    const { paths, componentName } = await writeSvg({
        svgPath,
        svgDir,
        iconify,
        getComponentNameConfig,
        output,
        renameFilter,
        template,
        framework,
    });
    components.push({ componentName, paths });
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
    iconify,
    getFileName,
    getComponentName,
}: Options & { svgDir: string }) {
    rimraf.sync(`${output}/*`); // Clean old files
    if (!output) {
        throw Error("Please provide an output");
    }
    const renameFilter = getDefaultNameFilter(framework, iconify);
    await fse.ensureDir(output);
    const template = await getTemplate({ framework, templateFile });
    const svgPaths = await getSvgs({ svgDir });
    const queue = new Queue(
        (svgPath: string) =>
            worker({
                getComponentNameConfig: getComponentName,
                svgPath,
                svgDir,
                framework,
                output,
                iconify,
                renameFilter: getFileName || renameFilter,
                template,
            }),
        { concurrency: 8 }
    );

    queue.push(svgPaths);
    await queue.wait({ empty: true });
    await generateIndex({ output, framework, components, iconify });
    spinner.succeed("Done!!");
}

async function generateIndex({
    output,
    framework = "vue",
    iconify,
    components,
}: Partial<Options> & {
    components?: { componentName?: string; paths?: string }[];
}) {
    if (components && iconify) {
        return await generateIndexIconify({ output, components, framework });
    }
    if (framework.startsWith("react")) {
        return await generateIndexReact({ output });
    }
    if (framework === "vue") {
        return await generateIndexVue({ output });
    }
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
            iconify: options.iconify || config.iconify,
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
            iconify,
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
            iconify,
            template,
            output,
            getFileName,
            getComponentName,
            framework: configFramework,
        });
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
        iconify,
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
            iconify,
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
                iconify: false,
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

async function startServer(options: Options) {
    const { path: pathOutput, framework, iconify } = await getConfig(options);
    if (!pathOutput) {
        return;
    }
    const result = await globAsync(path.join(pathOutput, "**/*.svg"));
    const icons = result.map((item) => {
        return {
            body: cleanPaths({
                data: fse.readFileSync(item, "utf-8"),
                svgPath: item,
            }),
            name: getComponentName(
                framework,
                iconify
            )(path.basename(item).replace(".svg", "")),
            filename: item,
        };
    });
    await serve({ icons, path: pathOutput });
}

const cli = cac("figus");

cli.version(version)
    .option("-s, --svg-dir <svgDir>", "Output of downloaded files")
    .option("-f, --file-key <fileKey>", "figma file key")
    .option("-t --template <template>", "Mustache template file")
    .option("-p, --page-name <pageName>", "figma page name")
    .option("-t, --token <token>", "Figma token")
    .option("-i, --iconify [iconify]", "Generate in Iconify format");

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

cli.command("explorer", "Explorer all icons available").action(startServer);

cli.command(
    "download",
    "Download Figma page components as SVGs to a specified location"
)
    .option("-o, --output <string>", "Download path")
    .action(downloadFigma);

cli.command("init", "initialize figus config file").action(init);

cli.help();

cli.parse();
