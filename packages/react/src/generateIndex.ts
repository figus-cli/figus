import path from "path";
import fse from "fs-extra";
import globAsync from "fast-glob";
import { Options } from "@figus/types";
import { getComponentName } from "@figus/svg";
import { formatFile } from "@figus/utils";

// { output: Options["output"], getComponentNameConfig: Options['getComponentName'] }
export async function generateIndex({
    output,
    getComponentName: getComponentNameConfig,
    framework,
}: Pick<Options, "output" | "getComponentName" | "framework">) {
    if (!output) {
        return;
    }
    const files = await globAsync(path.join(output, "**/*.tsx"));
    const index = files
        .map((file: string) => {
            let componentName = getComponentName(
                framework,
                false
            )(path.basename(file));
            if (getComponentNameConfig) {
                componentName = getComponentNameConfig(componentName);
            }
            const typename = path.basename(file).replace(".tsx", "");
            return `export { default as ${componentName} } from './${typename}';\n`;
        })
        .join("");
    const indexFileName = path.join(output, "index.ts");
    await fse.writeFile(indexFileName, index);
    await formatFile(indexFileName);
}
