import { Frameworks } from "@figus/types";
import { defaultDestRewriter as muiNameFilter } from "@figus/react-mui";
import { defaultDestRewriter as vueNameFilter } from "@figus/vue";

export function getDefaultNameFilter(framework: Frameworks) {
    if (framework.startsWith("react")) {
        console.log("here");
        return muiNameFilter;
    }
    return vueNameFilter;
}
