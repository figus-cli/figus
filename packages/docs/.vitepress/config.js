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
                            text: "CLI",
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
        algolia: {
            appId: "F5JGFXSL83",
            apiKey: "cb99f444d020ace695e8ec7892deb0b6",
            indexName: "figus",
        },
    },
});
