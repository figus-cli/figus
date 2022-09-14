import { FigmaOptions } from "@figus/figma";
import { RenameFilter } from "@figus/svg";
import { Frameworks } from "./frameworks";

export interface Options {
    /**
     * a transformer function to generate component names
     * @param fileName
     */
    getFileName?: RenameFilter;
    /**
     * the template to be used when generating component
     *
     */
    template?: string;

    /**
     * if provided will generate web-font icon kits from the svgs
     */
    fontName?: string;
    /**
     * transform component name
     * can use change-case for example to change the name casing from kebab case
     * @param name
     */
    getComponentName?: (name: string) => string;
    /**
     * where to save the output to
     */
    output?: string;
    /**
     * Which framework to generate components for
     */
    framework: Frameworks;
    /**
     * Figma config
     */
    figma?: FigmaOptions;
    /**
     * Path to svg if we only generate
     */
    path?: string;

    /**
     * Whether to generate in Iconify format
     */
    iconify: boolean;

    /**
     * whether to download icons when executing default command
     */
    download?: boolean;

    /**
     * Figma page name contains the icons
     */
    pageName?: string;
}
