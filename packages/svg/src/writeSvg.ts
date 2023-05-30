import path, { ParsedPath } from "path";
import fse from "fs-extra";
import Mustache from "mustache";
import { cleanPaths } from "./cleanPaths";
import { Frameworks, Options } from "@figus/types";
import { formatFile } from "@figus/utils";
import { getComponentName as getComponentNameVue } from "@figus/vue";
import { getComponentName as getComponentNameReact } from "@figus/react";
import { getComponentName as getComponentNameIconify } from "@figus/iconify";

export type RenameFilter = (
    svgPathObj: ParsedPath,
    innerPath: string,
    options: Options & { svgDir: string }
) => string;

export interface WorkerOptions {
    svgPath: string;
    iconify?: boolean;
    svgDir: string;
    framework: Frameworks;
    output: string;
    renameFilter: RenameFilter;
    getComponentNameConfig?: (name: string) => string;
    template?: string;
}

export async function writeSvg({
    svgPath,
    svgDir,
    iconify,
    output,
    getComponentNameConfig,
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
        iconify,
        framework,
    });
    const outputFileDir = path.dirname(path.join(output, destPath));
    await fse.ensureDir(outputFileDir);
    try {
        const data = await fse.readFile(svgPath, { encoding: "utf8" });
        const paths = cleanPaths({
            svgPath,
            data,
            removeSvgNode: false,
            framework,
        });
        let componentName = getComponentName(framework, iconify)(destPath);
        if (iconify) {
            return { paths, componentName };
        }
        if (getComponentNameConfig) {
            componentName = getComponentNameConfig(componentName);
        }
        if (!template) {
            return {};
        }

        const fileString = Mustache.render(template, {
            paths,
            componentName,
        });

        const absDestPath = path.join(output, destPath);
        await fse.writeFile(absDestPath, fileString);
        await formatFile(absDestPath);
        return { paths, componentName };
    } catch (e) {
        return {};
    }
}

export function getComponentName(framework: Frameworks, iconify?: boolean) {
    if (iconify) {
        return getComponentNameIconify;
    }
    if (framework.startsWith("react")) {
        return getComponentNameReact;
    }
    if (framework === "vue") {
        return getComponentNameVue;
    }

    throw Error("Unsupported framework: " + framework);
}
