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
            {
                text: "Configs",
                link: "/config/introduction",
                activeMatch: "/config/",
            },
        ],
        sidebar: {
            "/": [
                {
                    text: "Guide",
                    items: [
                        {
                            text: "Getting Started",
                            link: "/guide/",
                        },
                        {
                            text: "Features",
                            link: "/guide/features",
                        },
                        {
                            text: "Figma",
                            link: "/guide/figma",
                        },
                        {
                            text: "Figma",
                            link: "/guide/cli",
                        },
                    ],
                },
                {
                    text: "Config",
                    items: [
                        { text: "Introduction", link: "/config/introduction" },
                        { text: "App Configs", link: "/config/app-configs" },
                        {
                            text: "Figma Configs",
                            link: "/config/figma-configs",
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
