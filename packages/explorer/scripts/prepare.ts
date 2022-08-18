import fs from "fs-extra";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const out = path.resolve(__dirname, "../dist/assets");

async function copyLibs() {
    const modules = path.resolve(__dirname, "../node_modules");

    await fs.copy(
        path.join(modules, "svg-packer/dist/index.browser.js"),
        path.join(out, "lib/svg-packer.js")
    );

    // await fs.copy(
    //     path.join(modules, "jszip/dist/jszip.min.js"),
    //     path.join(out, "lib/jszip.min.js")
    // );
}

async function prepare() {
    await copyLibs();
}

prepare();
