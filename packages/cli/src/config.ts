import { Options } from "@figus/types";
import { FigmaOptions } from "@figus/figma";
import { resolve } from "pathe";
import fs from "fs-extra";
import { pathToFileURL } from "url";

export function defineConfig(config: Options) {
    return config;
}

type Config = Options & { figma: FigmaOptions };

const supportedConfigExtensions = ["js", "ts", "mjs", "mts"];

export async function resolveUserConfig(
    root: string = process.cwd()
): Promise<Config> {
    // load user config
    console.log(root);
    let configPath;
    for (const ext of supportedConfigExtensions) {
        const p = resolve(root, `figus.config.${ext}`);
        if (await fs.pathExists(p)) {
            configPath = p;
            break;
        }
    }
    console.log(configPath);
    if (!configPath) {
        throw new Error("missing config");
    }
    return await loadConfigFile(configPath);
}

async function loadConfigFile(fileName: string): Promise<Config> {
    return (await import(pathToFileURL(fileName).href)).default;
}
