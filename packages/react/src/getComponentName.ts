import path from "path";
import { pascalCase } from "change-case";

/**
 * Return Pascal-Cased component name.
 * @param {string} destPath
 * @returns {string} class name
 */
export function getComponentName(destPath: string) {
    destPath = destPath.replace(".tsx", "");
    return pascalCase(destPath);
}
