import { defineConfig } from "vitepress";

export default defineConfig({
    title: "Figus CLI",
    description: "Figma icon downloader and component generator",
    themeConfig: {
        socialLinks: [
            { icon: "twitter", link: "https://twitter.com/omrikatz12" },
            { icon: "github", link: "https://github.com/figus-cli/figus" },
        ],
        footer: {
            message: "Released under the MIT License.",
            copyright:
                "Copyright © 2021-PRESENT Omri Katz and Figus contributors",
        },
        nav: [
            { text: "Guide", link: "/guide/" },
            { text: "API", link: "/api/" },
            { text: "Config", link: "/config/" },
        ],
        sidebar: {
            "/": [
                {
                    text: "Guide",
                    items: [
                        {
                            text: "Why Vitest",
                            link: "/guide/why",
                        },
                        {
                            text: "Getting Started",
                            link: "/guide/",
                        },
                        {
                            text: "Features",
                            link: "/guide/features",
                        },
                        {
                            text: "CLI",
                            link: "/guide/cli",
                        },
                        {
                            text: "Test Filtering",
                            link: "/guide/filtering",
                        },
                        {
                            text: "Coverage",
                            link: "/guide/coverage",
                        },
                        {
                            text: "Snapshot",
                            link: "/guide/snapshot",
                        },
                    ],
                },
            ],
        },
        // algolia: {
        //     appId: "2B4GEQO30Z",
        //     apiKey: "e80b007bfc55b0f64f7970cdafd7f306",
        //     indexName: "figus",
        // },
    },
});
