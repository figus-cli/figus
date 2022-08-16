import path from "path";
import { camelCase } from "change-case";

/**
 * Return Pascal-Cased component name.
 * @param {string} destPath
 * @returns {string} class name
 */
export function getComponentName(destPath: string) {
    const splitregex = new RegExp(`[\\${path.sep}-]+`);
    destPath = destPath.replace("-", " ");
    const [nameOrSuffix, name] = destPath.replace(".vue", "").split(splitregex);
    if (name) {
        return camelCase(name);
    }
    return camelCase(nameOrSuffix);
}
