import { FigmaOptions } from "@figus/figma";
import { RenameFilter } from "@figus/svg";

export interface CliOptions {
    /**
     * a transformer function to generate component names
     * @param fileName
     */
    getFileName?: RenameFilter;
    /**
     * where to save the output to
     */
    output?: string;
    /**
     * Which framework to generate components for
     */
    framework: "vue" | "react";
    /**
     * Figma config
     */
    figma?: FigmaOptions;
    /**
     * Path to svg if we only generate
     */
    path?: string;
}
