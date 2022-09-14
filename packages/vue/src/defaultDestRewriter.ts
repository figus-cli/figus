import { pascalCase } from "pascal-case";

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
export function defaultDestRewriter(svgPathObj: any) {
    let fileName = svgPathObj.base;
    fileName = fileName.replace(".svg", "");
    // remove any @ in the file name
    fileName = fileName.replace(/@.*\./g, ".");
    fileName = pascalCase(fileName);
    // remove any spaces in the file name
    fileName = fileName.replace(/\s+/g, "");
    fileName += ".vue";
    return fileName;
}
