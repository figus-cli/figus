import Figma from "figma-api";
import Downloader from "nodejs-file-downloader";
import { VFile } from "vfile";
import * as fs from "fs";
import { spinner } from "@figus/utils";

export interface FigmaOptions {
    fileKey?: string;
    imageKey?: string;
    token?: string;
    output?: string;
    pageName?: string;
}

export async function clean() {
    fs.rmSync("~/icons/temp", { recursive: true, force: true });
}

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
    if (!token || !figma.fileKey || !figma.imageKey || !figma.pageName) {
        return;
    }
    const api = new Figma.Api({
        personalAccessToken: token,
    });

    const file = new VFile({
        path: "~/icons/temp",
    });
    try {
        spinner.start("determining files to download");
        const components = await api.getFileComponents(figma.fileKey);
        const files = components.meta?.components
            .filter((item) => item.containing_frame?.pageName === "Icon")
            .map((item) => {
                return {
                    node_id: item.node_id,
                    name: item.name.replace(/(\w.*\/)/, "").trim(),
                };
            });
        if (!files?.length) {
            return;
        }
        const { images } = await api.getImage(figma.imageKey, {
            ids: files.map((item) => item.node_id).join(","),
            scale: 1,
            format: "svg",
        });
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
        spinner.stop();
        if (!file.dirname) {
            return;
        }
        fs.rmSync(file.dirname, { recursive: true, force: true });
    }
}
