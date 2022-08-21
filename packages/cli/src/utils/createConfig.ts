import { Options } from "@figus/types";
import { formatFile } from "@figus/utils";
import fse from "fs-extra";
import path from "path";

export async function createConfig({
    output,
    figma,
    framework,
    path: svgPath,
    fontName,
}: Options) {
    const outputPath = path.resolve(process.cwd(), "figus.config.mjs");
    const config = `
import {defineConfig} from '@figus/cli';
export default defineConfig({
    output: "${output}",
    path: "${svgPath}",
    framework: "${framework.toLowerCase()}",
    ${fontName && "font:" + fontName + ","}
    figma: {
        ${figma?.pageName && "pageName: " + figma.pageName + ","}
        fileKey: "${figma?.fileKey}",
    }
}) 
    `;
    await fse.writeFile(outputPath, config);
    await formatFile(outputPath);
}
