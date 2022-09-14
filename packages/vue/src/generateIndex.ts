import path from "path";
import fse from "fs-extra";
import globAsync from "fast-glob";
import { Options } from "@figus/types";
import { formatFile } from "@figus/utils";
import { paramCase } from "change-case";

export async function generateIndex({ output }: { output: Options["output"] }) {
    if (!output) {
        return;
    }
    const files = await globAsync(path.join(output, "**/*.vue"));
    const index = files
        .map((file) => {
            const typename = path.basename(file).replace(".vue", "");
            return `export { default as ${typename} } from './${typename}.vue';\n`;
        })
        .join("");
    let names: string | string[] = files.map((file) => {
        const fileName = path.basename(file).replace(".vue", "");
        const typename = paramCase(fileName);
        return `
        '${typename}': {
          fileName: '${path.basename(fileName)}',
        }
      `;
    });
    names = ["export const icons = {", names, "}"].join("");
    const indexWithNames = index.concat(names);
    const fileName = path.join(output, "index.ts");
    await fse.writeFile(path.join(output, "index.ts"), indexWithNames);
    await formatFile(fileName);
}
