import path from "path";
import globAsync from "fast-glob";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function getSvgs({ svgDir }: { svgDir: string }) {
    return await globAsync(path.join(svgDir, "**/*.svg"));
}
