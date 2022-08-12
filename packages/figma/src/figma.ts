import Figma from "figma-api";
import Downloader from "nodejs-file-downloader";
import { VFile } from "vfile";
import * as fs from "fs";
import { spinner } from "@figus/utils";
import { flatten, mergeAll, splitEvery } from "ramda";

export interface FigmaOptions {
    fileKey?: string;
    token?: string;
    output?: string;
    pageName?: string;
}

export async function clean() {
    fs.rmSync("~/icons/temp", { recursive: true, force: true });
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
    if (!token || !figma.fileKey || !figma.pageName) {
        return;
    }
    const api = new Figma.Api({
        personalAccessToken: token,
    });

    const file = new VFile({
        path: "~/icons/temp",
    });
    try {
        spinner.start("Determining files to download");
        const { components } = await api.getFile(figma.fileKey);
        const files = Object.keys(components).map((item) => {
            return {
                node_id: item,
                name: components[item].name.replace(/(\w.*\/)/, "").trim(),
            };
        });
        if (!files?.length) {
            return;
        }
        const pages = splitEvery(PAGE_SIZE, files);

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

        spinner.text = "Downloading " + imagesWithNames.length + " Images";

        await Promise.all(
            imagesWithNames.map((item) => {
                if (!item.url) {
                    return Promise.resolve();
                }
                return new Downloader({
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
        fs.rmSync(file.dirname, { recursive: true, force: true });
    }
}
