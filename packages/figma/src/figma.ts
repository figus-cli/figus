import Figma from "figma-api";
import Downloader from "nodejs-file-downloader";
import { VFile } from "vfile";
import * as fs from "fs";
import { spinner } from "@figus/utils";
import { mergeAll, splitEvery } from "ramda";
import debug from "debug";
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
    path,
}: {
    token?: string;
    figma: FigmaOptions;
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

        const imagesWithNames = Object.keys(images).map((key) => {
            return {
                url: images[key],
                name: files.find((item) => item.node_id === key)?.name,
            };
        });

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
        .map((item) => {
            return {
                node_id: item.node_id,
                name: item.name.replace(/(\w.*\/)/, "").trim(),
            };
        });
}
