import nodeResolve from "@rollup/plugin-node-resolve";
import { builtinModules } from "module";
import pkg from "./package.json";
import path from "path";
import commonjs from "@rollup/plugin-commonjs";
import esbuild from "rollup-plugin-esbuild";
import json from "@rollup/plugin-json";
import copy from "rollup-plugin-copy";

import alias from "@rollup/plugin-alias";

import dts from "rollup-plugin-dts";
import { fileURLToPath } from "url";

const entries = ["src/index.ts"];
const dtsEntries = ["src/index.ts"];

const external = [
    ...builtinModules,
    ...Object.keys(pkg.dependencies),
    "worker_threads",
    "inspector",
];

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aliasPlugin = alias({
    entries: [
        {
            find: "@figus/utils",
            replacement: path.resolve(__dirname, "../utils/src/index.ts"),
        },
        {
            find: "@figus/iconify",
            replacement: path.resolve(__dirname, "../iconify/src/index.ts"),
        },
        {
            find: "@figus/svg",
            replacement: path.resolve(__dirname, "../svg/src/index.ts"),
        },
        {
            find: "@figus/explorer",
            replacement: path.resolve(__dirname, "../explorer/src/index.ts"),
        },
        {
            find: "@figus/vue",
            replacement: path.resolve(__dirname, "../vue/src/index.ts"),
        },
        {
            find: "@figus/react",
            replacement: path.resolve(__dirname, "../react/src/index.ts"),
        },
        {
            find: "@figus/commonjs",
            replacement: path.resolve(__dirname, "../commonjs/src/index.js"),
        },
        {
            find: "@figus/react-mui",
            replacement: path.resolve(__dirname, "../react-mui/src/index.ts"),
        },
        {
            find: "@figus/figma",
            replacement: path.resolve(__dirname, "../figma/src/index.ts"),
        },
        {
            find: "@figus/types",
            replacement: path.resolve(__dirname, "../types/src/index.ts"),
        },
    ],
});

export default [
    {
        input: entries,
        output: {
            dir: "dist",
            format: "esm",
            sourcemap: true,
            entryFileNames: "[name].mjs",
        },
        external,
        plugins: [
            commonjs(),
            nodeResolve({
                preferBuiltins: true,
            }),
            copy({
                targets: [
                    {
                        src: path.resolve(__dirname, "../svg/src/templates/*"),
                        dest: "dist/templates",
                    },
                ],
            }),
            aliasPlugin,
            json(),
            esbuild({
                // minify: true,
                target: "node14",
            }),
        ],
    },
    {
        input: dtsEntries,
        output: {
            dir: "dist",
            entryFileNames: (chunk) => `${chunk.name.replace("src/", "")}.d.ts`,
            format: "esm",
        },
        external,
        plugins: [aliasPlugin, dts({ respectExternal: true })],
    },
];
