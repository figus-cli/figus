import express from "express";
import * as path from "path";
import { fileURLToPath } from "url";
import fse, { ensureDir } from "fs-extra";
import { Logger } from "vite";
import colors from "picocolors";
import { generateFonts } from "@figus/svg";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export function printServerUrls(
    urls: { local: string[] },
    info: Logger["info"]
): void {
    const colorUrl = (url: string) =>
        colors.cyan(
            url.replace(/:(\d+)\//, (_, port) => `:${colors.bold(port)}/`)
        );
    for (const url of urls.local) {
        info(
            `  ${colors.green("➜")}  ${colors.bold(
                "Explorer is running on"
            )}:   ${colorUrl(url)}`
        );
    }
}

export async function serve({
    path: outputPath,
    fontName,
    size,
    icons,
}: {
    path: string;
    fontName?: string;
    size?: number;
    icons: { body: string; filename: string; name: string }[];
}) {
    const app = express();
    const port = 3000;
    const assetsPath = path.join(__dirname, "public");
    await fse.copy(path.resolve(outputPath), path.join(assetsPath, "assets"), {
        recursive: true,
    });

    app.get("/", (req, res) => {
        res.send({
            icons,
            size,
            fontName,
        });
    });

    app.get("/download", async (req, res) => {
        if (!fontName) {
            return res.send({ failure: true });
        }

        await ensureDir(path.join(__dirname, "temp"));
        await generateFonts({
            fontName,
            input: path.resolve(outputPath),
            output: path.join(__dirname, "temp"),
        });
        return res.download(path.join(__dirname, "temp"));
    });

    app.get("/svgs", async (req, res) => {
        res.send({
            fontName,
            icons: icons.map((item) => ({
                name: item.name,
                svg: item.body,
            })),
        });
    });

    app.use(express.static(assetsPath));

    app.listen(port, () => {
        printServerUrls(
            {
                local: ["http://localhost:3000/index.html"],
            },
            console.log
        );
    });
}
