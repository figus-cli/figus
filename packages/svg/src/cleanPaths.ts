import * as svgo from "svgo";
import path from "path";
import { OptimizedSvg } from "svgo";

export function cleanPaths({
    svgPath,
    data,
}: {
    svgPath: string;
    data: string;
}) {
    // Remove hardcoded color fill before optimizing so that empty groups are removed
    const input = data
        .replace(/<rect fill="none" width="24" height="24"\/>/g, "")

        .replace(/<rect id="SVGID_1_" width="24" height="24"\/>/g, "");

    const result = svgo.optimize(input, {
        floatPrecision: 4,
        multipass: true,
        plugins: [
            { name: "cleanupAttrs" },
            { name: "removeDoctype" },
            { name: "removeXMLProcInst" },
            { name: "removeComments" },
            { name: "removeMetadata" },
            { name: "removeTitle" },
            { name: "removeDesc" },
            { name: "removeUselessDefs" },
            { name: "removeXMLNS" },
            { name: "removeEditorsNSData" },
            { name: "removeEmptyAttrs" },
            { name: "removeHiddenElems" },
            { name: "removeEmptyText" },
            { name: "removeViewBox" },
            { name: "cleanupEnableBackground" },
            { name: "minifyStyles" },
            { name: "convertStyleToAttrs" },
            { name: "convertColors" },
            { name: "convertPathData" },
            { name: "convertTransform" },
            { name: "removeUnknownsAndDefaults" },
            { name: "removeNonInheritableGroupAttrs" },
            {
                name: "removeUselessStrokeAndFill",
                params: {
                    // https://github.com/svg/svgo/issues/727#issuecomment-303115276
                    // removeNone: true,
                },
            },
            { name: "removeUnusedNS" },
            { name: "cleanupIDs" },
            { name: "cleanupNumericValues" },
            { name: "cleanupListOfValues" },
            { name: "moveElemsAttrsToGroup" },
            { name: "moveGroupAttrsToElems" },
            { name: "collapseGroups" },
            { name: "removeRasterImages" },
            { name: "mergePaths" },
            { name: "convertShapeToPath" },
            { name: "sortAttrs" },
            { name: "removeDimensions" },
            {
                name: "removeAttrs",
                params: {
                    attrs: "stroke-linecap",
                },
            },
            { name: "removeElementsByAttr" },
            { name: "removeStyleElement" },
            { name: "removeScriptElement" },
            { name: "removeEmptyContainers" },
        ],
    });
    if (result.error) {
        throw Error("error parsing svg " + svgPath);
    }

    const jsxResult = svgo.optimize((result as OptimizedSvg).data);
    // Extract the paths from the svg string
    // Clean xml paths
    let paths = (jsxResult as OptimizedSvg).data
        .replace(/"\/>/g, '" />')
        .replace(/ clip-path=".+?"/g, "") // Fix visibility issue and save some bytes.
        .replace(/<clipPath.+?<\/clipPath>/g, ""); // Remove unused definitions

    const size = Number(path.basename(path.dirname(svgPath)));
    if (size && size !== 24) {
        const scale = Math.round((24 / size) * 100) / 100; // Keep a maximum of 2 decimals
        paths = paths.replace('clipPath="url(#b)" ', "");
        paths = paths.replace(
            /<path /g,
            `<path transform="scale(${scale}, ${scale})" fill="none" `
        );
    }
    // replace stroke and fill with inherit color
    paths = paths.replace(/fill=".+?"/g, 'fill="currentColor"');
    paths = paths.replace(/stroke=".+?"/g, ' stroke="currentColor"');
    if (!/fill=".+?"/.test(paths)) {
        paths = paths.replace(/<path /g, '<path fill="none" ');
    }

    return paths;
}
