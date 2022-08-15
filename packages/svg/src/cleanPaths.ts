import * as svgo from "svgo";
import { OptimizedSvg, XastElement } from "svgo";
import path from "path";

export function cleanPaths({
    svgPath,
    data,
}: {
    svgPath: string;
    data: string;
}) {
    const result = svgo.optimize(data, {
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
                name: "addAttributesToSVGElement",
                params: {
                    attributes: [
                        {
                            width: "1em",
                            height: "1em",
                            fill: "currentColor",
                        },
                    ],
                },
            },
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
            {
                name: "customPluginName",
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                type: "visitor", // 'perItem', 'perItemReverse' or 'full'
                fn: () => {
                    return {
                        element: {
                            enter: (
                                node: XastElement,
                                parentNode: XastElement
                            ) => {
                                if (node.name === "svg") {
                                    detachNodeFromParent(node, parentNode);
                                }
                            },
                        },
                    };
                },
            },
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

const detachNodeFromParent = (node: XastElement, parentNode: XastElement) => {
    // avoid splice to not break for loops
    parentNode.children = node.children;
    parentNode.children = parentNode.children.filter(
        (child: any) => child !== node
    );
};
