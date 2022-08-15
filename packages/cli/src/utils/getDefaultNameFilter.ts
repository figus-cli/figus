import { Frameworks } from "@figus/types";
import { defaultDestRewriter as reactNameFilter } from "@figus/react";
import { defaultDestRewriter as vueNameFilter } from "@figus/vue";
import { ParsedPath } from "path";

export function getDefaultNameFilter(framework: Frameworks, iconify: boolean) {
    if (iconify) {
        return defaultDestRewriter;
    }
    if (framework.startsWith("react")) {
        return reactNameFilter;
    }
    if (framework === "vue") {
        return vueNameFilter;
    }
    return defaultDestRewriter;
}

function defaultDestRewriter(svgPathObj: ParsedPath, innerPath: string) {
    let fileName = svgPathObj.base;
    fileName = fileName.replace(".svg", "");
    return fileName;
}
