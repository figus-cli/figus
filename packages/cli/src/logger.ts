import color from "picocolors";

export const pluralize = (word: string, amount: number) =>
    amount === 1 ? word : `${word}s`;

export const getLogger = (debug = false, silent = false) => ({
    error(error: Error | string) {
        const message = (error instanceof Error && error.message) || error;

        console.log(color.red(message as string));

        debug && error instanceof Error && console.log(error.stack);
    },

    log(...values: any[]) {
        !silent && console.log(...values);
    },

    start(loadedConfigPath = null) {
        this.log(color.yellow(`Generating font kit...`));

        if (loadedConfigPath) {
            this.log(
                color.green(
                    `✔ Using configuration file: ${color.green(
                        color.bold(loadedConfigPath)
                    )}`
                )
            );
        }
    },

    results({
        assetsIn,
        writeResults,
        inputDir,
    }: {
        assetsIn: string[];
        writeResults: { [key: string]: string };
        inputDir: string;
    }) {
        const iconsCount = assetsIn.length;

        this.log(
            color.white(
                `✔ ${iconsCount} ${pluralize(
                    "SVG",
                    iconsCount
                )} found in ${inputDir}`
            )
        );
        Object.keys(writeResults).forEach((key) => {
            this.log(
                color.blue(`✔ Generated ${color.blue(writeResults[key])}`)
            );
        });

        this.log(color.green(color.bold("Done")));
    },
});
