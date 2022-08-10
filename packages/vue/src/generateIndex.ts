import path from "path";
import fse from "fs-extra";
import globAsync from "fast-glob";
import { Options } from "@figus/types";

export async function generateIndex(options: Options) {
    if (!options.output) {
        return;
    }
    const files = await globAsync(path.join(options.output, "**/*.vue"));
    const index = files
        .map((file) => {
            const typename = path.basename(file).replace(".vue", "");
            return `export { default as ${typename} } from './lib/${typename}';\n`;
        })
        .join("");

    await fse.writeFile(path.join(options.output, "../", "index.ts"), index);
}
