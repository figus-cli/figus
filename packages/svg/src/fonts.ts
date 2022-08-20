// /* eslint-disable no-console */
//
import SVGIcons2SVGFontStream from "svgicons2svgfont";
import path from "path";
import fs from "fs-extra";
import svg2ttf from "svg2ttf";
import ttf2woff from "ttf2woff";
import ttf2eot from "ttf2eot";
import { formatFile, renderTemplate } from "@figus/utils";
import crypto from "crypto";

interface IconData {
    file: string;
    codepointHexa: string;
    name: string;
    unicode: string;
}

export const generateSVGFont = (
    iconsData: IconData[],
    fontName: string,
    dest: string
): Promise<{ fileCreated: string; buffer: Buffer }> => {
    const fontStream = new SVGIcons2SVGFontStream({
        fontName,
        fontHeight: 1000,
        normalize: true,
    });

    return new Promise((resolve, reject) => {
        const filename = `${fontName}.svg`;
        const buffers: Buffer[] = [];
        fontStream
            .on("data", (data) => {
                buffers.push(data);
            })
            .pipe(fs.createWriteStream(path.join(dest, filename)))
            .on("finish", () => {
                resolve({
                    buffer: Buffer.concat(buffers),
                    fileCreated: path.join(dest, filename),
                });
            })
            .on("error", reject);

        iconsData.forEach((icon) => {
            const glyph: any = fs.createReadStream(icon.file);
            glyph.metadata = {
                name: icon.name,
                codepointHexa: icon.codepointHexa,
                unicode: [icon.unicode],
            };
            fontStream.write(glyph);
        });

        fontStream.end();
    });
};

export async function generateTTFFont(
    svgFontBuffer: Buffer,
    fontName: string,
    dest: string
) {
    const filename = `${fontName}.ttf`;
    const buffer = Buffer.from(svg2ttf(svgFontBuffer.toString()).buffer);
    await fs.writeFile(path.join(dest, filename), buffer);
    return {
        buffer,
        fileCreated: path.join(dest, filename),
    };
}

export async function generateWOFFFont(
    file: string,
    fontName: string,
    dest: string
) {
    const filename = `${fontName}.woff`;
    const input = fs.readFileSync(file);
    const ttf = new Uint8Array(input);
    const woff = ttf2woff(ttf, {});
    await fs.writeFile(path.join(dest, filename), woff);
    return path.join(dest, filename);
}

export async function generateCss({
    fontName,
    font,
    glyphData,
    dest,
}: {
    fontName: string;
    font: Buffer;
    glyphData: IconData[];
    dest: string;
}) {
    const filename = `${fontName}.css`;
    const css = await renderTemplate("./templates/css.hbs", {
        fontName,
        tag: "i",
        prefix: "icon",
        glyphData,
        fontSrc: renderSrcAttribute(
            {
                name: fontName,
                fontTypes: [
                    FontAssetType.EOT,
                    FontAssetType.TTF,
                    FontAssetType.WOFF,
                    FontAssetType.WOFF2,
                    FontAssetType.SVG,
                ],
            },
            font
        ),
    });
    fs.writeFileSync(path.join(dest, filename), css);
    return await formatFile(path.join(dest, filename));
}

export async function generateScss({
    fontName,
    glyphData,
    dest,
    font,
}: {
    fontName: string;
    dest: string;
    font: Buffer;
    glyphData: IconData[];
}) {
    const filename = `${fontName}.scss`;
    try {
        const scss = await renderTemplate("./templates/scss.hbs", {
            fontName,
            glyphData,
            tag: "i",
            prefix: "icon",
            fontSrc: renderSrcAttribute(
                {
                    name: fontName,
                    fontTypes: [
                        FontAssetType.EOT,
                        FontAssetType.TTF,
                        FontAssetType.WOFF,
                        FontAssetType.WOFF2,
                        FontAssetType.SVG,
                    ],
                },
                font
            ),
        });

        fs.writeFileSync(path.join(dest, filename), scss);
        await formatFile(path.join(dest, filename));
    } catch (e) {
        console.log(e);
    }
}

export async function generateHtml({
    fontName,
    glyphData,
    dest,
}: {
    fontName: string;
    dest: string;
    glyphData: IconData[];
}) {
    const filename = `${fontName}.html`;
    const html = await renderTemplate("./templates/html.hbs", {
        fontName,
        tag: "i",
        prefix: "icon",
        assets: glyphData,
    });
    fs.writeFileSync(path.join(dest, filename), html);
    await formatFile(path.join(dest, filename));
}

export async function generateEOTFont(
    buffer: Buffer,
    fontName: string,
    dest: string
) {
    const filename = `${fontName}.eot`;
    const font = await ttf2eot(new Uint8Array(buffer));
    fs.writeFileSync(path.join(dest, filename), font);
    return path.join(dest, filename);
}

export async function generateWOFF2Font(
    buffer: Buffer,
    fontName: string,
    dest: string
) {
    const filename = `${fontName}.woff2`;
    const ttf2woff2 = (await import("ttf2woff2")).default;
    fs.writeFileSync(path.join(dest, filename), ttf2woff2(buffer));
    return path.join(dest, filename);
}

interface RenderSrcOptions {
    formatValue: string;
    getSuffix?: (name: string) => string;
}

export enum FontAssetType {
    EOT = "eot",
    WOFF2 = "woff2",
    WOFF = "woff",
    TTF = "ttf",
    SVG = "svg",
}

const renderSrcOptions: { [key in FontAssetType]: RenderSrcOptions } = {
    [FontAssetType.EOT]: {
        formatValue: "embedded-opentype",
        getSuffix: () => "#iefix",
    },
    [FontAssetType.WOFF2]: { formatValue: "woff2" },
    [FontAssetType.WOFF]: { formatValue: "woff" },
    [FontAssetType.TTF]: { formatValue: "truetype" },
    [FontAssetType.SVG]: {
        formatValue: "svg",
        getSuffix: (name) => `#${name}`,
    },
};

export const getHash = (...contents: Array<string | Buffer>) => {
    const hash = crypto.createHash("md5");

    for (const content of contents) {
        hash.update(content);
    }

    return hash.digest("hex");
};

export const renderSrcAttribute = (
    { name, fontTypes }: { name: string; fontTypes: FontAssetType[] },
    font: string | Buffer
) =>
    fontTypes
        .map((fontType) => {
            const { formatValue, getSuffix } = renderSrcOptions[fontType];
            const hash = getHash(font.toString("utf8"));
            const suffix = getSuffix ? getSuffix(name) : "";
            return `url("./${name}.${fontType}?${hash}${suffix}") format("${formatValue}")`;
        })
        .join(",\n");
