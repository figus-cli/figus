import path from "path";
import fse from "fs-extra";
import globAsync from "fast-glob";
import { camelCase } from "change-case";
import { formatFile } from "@figus/utils";

async function generateIndex(options) {
    path.join(options.svgDir, options.glob);
    const files = await globAsync(path.join(options.outputDir, "**/*.vue"));
    const index = files.map((file) => {
        const fileName = path.basename(file).replace(".vue", "");
        const typename = camelCase(fileName);
        return `
        '${typename}': {
          fileName: '${path.basename(fileName)}',
        }
      `;
        // return `export { default as ${typename} } from './lib/${typename}.vue';\n`;
    });
    const indexFile = ["export const icons = {", index, "}"].join("");

    await fse.writeFile(path.join(options.outputDir, "index.ts"), indexFile);
    await formatFile(path.join(options.outputDir, "index.ts"));
}
