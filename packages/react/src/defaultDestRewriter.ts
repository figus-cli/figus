/*
 * Return path to write file to inside outputDir.
 * @param {object} svgPathObj
 * path objects from path.parse
 * @param {string} innerPath
 * Path (relative to options.svgDir) to svg file
 *   e.g. if svgFile was /home/user/icon/path/to/svg/file.svg
 *   options.svgDir is /home/user/icon/
 *   innerPath is path/to/svg
 * @param {object} options
 * @returns {string} output file dest relative to outputDir
 */
import { ParsedPath } from "path";
import { pascalCase } from "pascal-case";

export function defaultDestRewriter(svgPathObj: ParsedPath) {
    let fileName = svgPathObj.base;
    fileName = fileName.replace(".svg", "");

    // remove any @ in the file name
    fileName = fileName.replace(/@.*\./g, ".");
    // remove any spaces in the file name
    fileName = fileName.replace(/\s+/g, "");

    fileName = pascalCase(fileName).concat(".tsx");
    // add Size to end of the File, example:
    // Close.tsx -> Close16.tsx
    return fileName;
}
