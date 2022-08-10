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
}
