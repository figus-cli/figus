import fse from "fs-extra";
// import { resolveConfig } from "prettier";

export async function formatFile(file: string) {
    let options = {
        filepath: file,
    };
    const data = await fse.readFile(file, "utf-8");
    // TODO: check prettier for esm support
    try {
        // const resolvedOptions = await resolveConfig(file, {
        //     editorconfig: true,
        // });
        options = {
            ...options,
        };
        // const formatted = format(data, options);
        // await fse.writeFile(file, formatted);
    } catch (e) {
        console.log(e);
    }
}
