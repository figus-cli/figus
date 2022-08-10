import { Frameworks } from "@figus/types";
import { defaultDestRewriter as reactNameFilter } from "@figus/react";
import { defaultDestRewriter as vueNameFilter } from "@figus/vue";

export function getDefaultNameFilter(framework: Frameworks) {
    if (framework.startsWith("react")) {
        return reactNameFilter;
    }
    return vueNameFilter;
}
