import fse from "fs-extra";
import prettier, { format } from "prettier";

export async function formatFile(file: string) {
    let options = {
        filepath: file,
    };
    const data = await fse.readFile(file, "utf-8");
    try {
        const resolvedOptions = await prettier.resolveConfig(file, {
            editorconfig: true,
        });
        options = {
            ...options,
            ...resolvedOptions,
        };
        const formatted = format(data, options);
        await fse.writeFile(file, formatted);
    } catch (e) {
        console.log(e);
    }
}
