import path from "path";
import { paramCase } from "param-case";

/**
 * Return Pascal-Cased component name.
 * @param {string} destPath
 * @returns {string} class name
 */
export function getComponentName(destPath: string) {
    const splitregex = new RegExp(`[\\${path.sep}-]+`);
    const [nameOrSuffix, name] = destPath.replace(".tsx", "").split(splitregex);
    if (name) {
        return paramCase(name.replace("_", "-"));
    }
    return paramCase(nameOrSuffix.replace("_", "-"));
}
