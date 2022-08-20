import { Options } from "@figus/types";
import { formatFile } from "@figus/utils";
import fse from "fs-extra";
import * as path from "path";

export async function createConfig({
    output,
    figma,
    framework,
    font,
}: Options) {
    const outputPath = path.resolve(process.cwd(), "figus.config.js");
    const config = `
import {defineConfig} from '@figus/cli';
export default defineConfig({
    output: "${output}",
    framework: "${framework.toLowerCase()}",
    ${font || "font: true"},
    figma: {
        pageName: "${figma?.pageName}",
        fileKey: "${figma?.fileKey}",
    }
}) 
    `;
    await fse.writeFile(outputPath, config);
    await formatFile(outputPath);
}
