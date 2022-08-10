import { CliOptions } from "@figus/types";
import { formatFile } from "@figus/utils";
import fse from "fs-extra";
import * as path from "path";

export async function createConfig({ output, figma, framework }: CliOptions) {
    const outputPath = path.resolve(process.cwd(), "figus.config.js");
    const config = `
import {defineConfig} from '@figus/cli';
export default defineConfig({
    output: "${output}",
    framework: "${framework.toLowerCase()}",
    figma: {
        pageName: "${figma?.pageName}",
        imageKey: "${figma?.imageKey}",
        fileKey: "${figma?.fileKey}",
    }
}) 
    `;
    await fse.writeFile(outputPath, config);
    await formatFile(outputPath);
}
