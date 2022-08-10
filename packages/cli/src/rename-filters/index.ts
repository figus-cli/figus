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
function defaultDestRewriter(svgPathObj, innerPath, options) {
  let fileName = svgPathObj.base;
  if (options.fileSuffix) {
    fileName.replace(options.fileSuffix, '.svg');
  } else {
    fileName = fileName.replace('.svg', '.vue');
  }
  fileName = fileName.replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => {
    return (p1 || p3).toUpperCase();
  });
  const size = innerPath.replace(/\//g, '');
  // remove any @ in the file name
  fileName = fileName.replace(/@.*\./g, '.');
  fileName = fileName.replace('-', ' ');
  fileName = camelize(fileName);
  fileName = fileName.replace('Vue', 'vue');
  // remove any spaces in the file name
  fileName = fileName.replace(/\s+/g, '');
  // add Size to end of the File, example:
  // Close.tsx -> Close16.tsx
  fileName = fileName.replace('.vue', `${size}.vue`);
  return fileName;
}

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
    if (+match === 0) return ''; // or if (/\s+/.test(match)) for white spaces
    return index === 0 ? match.toUpperCase() : match.toUpperCase();
  });
}

export default defaultDestRewriter;
