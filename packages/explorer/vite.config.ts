import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

const modules = path.resolve(__dirname, "./node_modules");
// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        viteStaticCopy({
            targets: [
                {
                    rename: "svg-packer.js",
                    src: path.join(modules, "svg-packer/dist/index.browser.js"),
                    dest: "./assets",
                },
                {
                    rename: "public",
                    src: "dist",
                    dest: "../../cli/dist",
                },
            ],
        }),
    ],
});
