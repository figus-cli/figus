import { getSvgs } from "./getSvgs";
import path from "path";
import {
    generateCss,
    generateEOTFont,
    generateHtml,
    generateScss,
    generateSVGFont,
    generateTTFFont,
    generateWOFF2Font,
    generateWOFFFont,
} from "./fonts";

const startCodepoint = 0xf101;
let currentCodepoint = startCodepoint;
const getNextCodepoint = () => {
    const res = currentCodepoint;
    currentCodepoint++;
    return res;
};

export async function generateFonts({
    input,
    output,
    fontName,
}: {
    input: string;
    output: string;
    fontName: string;
}) {
    const svgs = await getSvgs({ svgDir: input });

    const glyphData = svgs.map((file) => {
        const name = path.basename(file).replace(".svg", "");
        const codepoint = getNextCodepoint();
        const unicode = String.fromCodePoint(codepoint);

        return {
            name,
            codepoint,
            file,
            codepointHexa: codepoint.toString(16),
            unicode,
        };
    });
    const { buffer: svgFontBuffer, fileCreated: svgFile } =
        await generateSVGFont(glyphData, fontName, output);

    const { buffer, fileCreated: ttfFileName } = await generateTTFFont(
        svgFontBuffer,
        fontName,
        output
    );

    const woffFile = await generateWOFFFont(ttfFileName, fontName, output);

    const woff2File = await generateWOFF2Font(buffer, fontName, output);

    const eotFile = await generateEOTFont(buffer, fontName, output);

    await generateCss({
        fontName,
        glyphData,
        font: buffer,
        dest: output,
    });

    await generateHtml({ fontName, dest: output, glyphData });

    await generateScss({
        fontName,
        dest: output,
        glyphData,
        font: buffer,
    });

    return {
        fontName,
        glyphData,
        svgs,
        fontFiles: {
            svg: svgFile,
            eot: eotFile,
            ttf: ttfFileName,
            woff: woffFile,
            woff2: woff2File,
        },
    };
}
