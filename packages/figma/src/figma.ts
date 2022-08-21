import Figma from "figma-api";
import Downloader from "nodejs-file-downloader";
import { VFile } from "vfile";
import * as fs from "fs";
import { spinner } from "@figus/utils";
import { mergeAll, splitEvery } from "ramda";
import { cleanPaths } from "@figus/svg";
import globAsync from "fast-glob";
import debug from "debug";
import color from "picocolors";
import fse from "fs-extra";
import path from "path";
import { Frameworks } from "@figus/types";

const figmaLogger = debug("figus:figma");

export interface FigmaOptions {
    fileKey?: string;
    token?: string;
    output?: string;
    pageName?: string;
}

export const OUTPUT_PATH = "~/icons/temp";

export function clean() {
    figmaLogger("Cleaning output path");
    fs.rmSync(OUTPUT_PATH, { recursive: true, force: true });
}

const PAGE_SIZE = 200;

export async function download({
    token,
    figma,
    framework,
    path,
}: {
    token?: string;
    figma: FigmaOptions;
    framework: Frameworks;
    path?: string;
}) {
    await clean();
    if (!token || !figma.fileKey) {
        return;
    }
    const api = new Figma.Api({
        personalAccessToken: token,
    });

    const file = new VFile({
        path: OUTPUT_PATH,
    });
    try {
        spinner.start("Determining files to download");
        const files = figma.pageName
            ? await getComponents({ figma, api })
            : await getFiles({ figma, api });

        if (!files?.length) {
            return;
        }
        const pages = splitEvery(PAGE_SIZE, files);
        figmaLogger(`Splitting request to ${pages.length} pages`);
        const [...imagePages] = await Promise.all(
            pages.map((page) => {
                return api.getImage(figma.fileKey!, {
                    ids: page.map((item) => item.node_id).join(","),
                    scale: 1,
                    format: "svg",
                });
            })
        );
        const images = mergeAll(imagePages.map((item) => item.images));

        const imagesWithNames = Object.keys(images)
            .map((key) => {
                return {
                    url: images[key],
                    name: files
                        .find((item) => item.node_id === key)
                        ?.name.replace("_", "-"),
                };
            })
            .filter((item) => !/^\d/.test(item.name!));

        spinner.text = "Downloading " + imagesWithNames.length + " icons";
        figmaLogger(`Downloading ${imagesWithNames.length} icons`);

        await Promise.all(
            imagesWithNames.map((item) => {
                if (!item.url) {
                    return Promise.resolve();
                }
                return new Downloader({
                    cloneFiles: false,
                    url: item.url,
                    maxAttempts: 3,
                    directory: path || file.dirname,
                    fileName: `${item.name}.svg`, //This will be the file name.
                }).download();
            })
        );

        spinner.stop();
        console.log(
            color.blue(
                `${color.green("✔")} Downloaded ${color.green(
                    color.bold(imagesWithNames.length)
                )} assets`
            )
        );
        await optimizeAssets(framework, path || file.dirname);
        return file.dirname;
    } catch (e) {
        console.error(e);
        spinner.stop();
        if (!file.dirname) {
            return;
        }
        clean();
    }
}

async function optimizeAssets(framework: Frameworks, dir?: string) {
    if (!dir) {
        return;
    }
    const result = await globAsync(path.join(dir, "**/*.svg"));
    await Promise.all(
        result.map(async (item) => {
            const data = await fse.readFile(item, { encoding: "utf8" });
            const paths = cleanPaths({
                framework,
                svgPath: item,
                data,
                removeSvgNode: true,
            });
            return await fse.writeFile(item, paths);
        })
    );
}

async function getFiles({
    figma,
    api,
}: {
    figma: FigmaOptions;
    api: Figma.Api;
}) {
    if (!figma.fileKey) {
        figmaLogger("Missing file key");
        return [];
    }
    figmaLogger("fetching icon list via getFile api");
    const { components } = await api.getFile(figma.fileKey);
    return Object.keys(components).map((item) => {
        return {
            node_id: item,
            name: components[item].name.replace(/(\w.*\/)/, "").trim(),
        };
    });
}

async function getComponents({
    api,
    figma,
}: {
    api: Figma.Api;
    figma: FigmaOptions;
}) {
    if (!figma.pageName || !figma.fileKey) {
        figmaLogger("Missing file key or page name");
        return [];
    }
    figmaLogger("fetching icon list via getFileComponents api");
    const components = await api.getFileComponents(figma.fileKey);
    return components.meta?.components
        .filter((item) =>
            item.containing_frame?.pageName
                .toLowerCase()
                .includes(figma.pageName!.toLowerCase())
        )
        .filter((item) => {
            return item.containing_frame?.name === "ironSource UI";
        })
        .map((item) => {
            return {
                node_id: item.node_id,
                name: item.name.replace(/(\w.*\/)/, "").trim(),
            };
        });
}
