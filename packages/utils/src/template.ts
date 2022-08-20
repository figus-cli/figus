import fse from "fs-extra";
import path from "path";
import Handlebars from "handlebars";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const renderTemplate = async (file: string, context: object) => {
    const template = await fse.readFile(path.resolve(__dirname, file), "utf8");
    return Handlebars.compile(template)(context);
};
