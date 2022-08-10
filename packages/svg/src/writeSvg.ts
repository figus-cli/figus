import path, { ParsedPath } from "path";
import fse from "fs-extra";
import Mustache from "mustache";
import { cleanPaths } from "./cleanPaths";
import { CliOptions, Frameworks } from "@figus/types";
import { formatFile } from "@figus/utils";
import { getComponentName } from "@figus/vue";

export type RenameFilter = (
    svgPathObj: ParsedPath,
    innerPath: string,
    options: CliOptions & { svgDir: string }
) => string;

export interface WorkerOptions {
    svgPath: string;
    svgDir: string;
    framework: Frameworks;
    output: string;
    renameFilter: RenameFilter;
    template: string;
    progress?: () => void;
}

export async function writeSvg({
    svgPath,
    svgDir,
    output,
    renameFilter,
    framework,
    template,
}: WorkerOptions) {
    const normalizedSvgPath = path.normalize(svgPath);
    const svgPathObj = path.parse(normalizedSvgPath);
    const innerPath = path
        .dirname(normalizedSvgPath)
        .replace(svgDir, "")
        .replace(path.relative(process.cwd(), svgDir), ""); // for relative dirs
    const destPath = renameFilter(svgPathObj, innerPath, {
        svgDir,
        output,
        framework,
    });
    const outputFileDir = path.dirname(path.join(output, destPath));
    await fse.ensureDir(outputFileDir);
    try {
        const data = await fse.readFile(svgPath, { encoding: "utf8" });
        const paths = cleanPaths({ svgPath, data });
        const componentName = getComponentName(destPath);

        const fileString = Mustache.render(template, {
            paths,
            componentName,
        });

        const absDestPath = path.join(output, destPath);
        await fse.writeFile(absDestPath, fileString);
        await formatFile(absDestPath);
    } catch (e) {
        return null;
    }
}
