import { Frameworks, Options } from "@figus/types";
import Handlebars from "handlebars";
import fse from "fs-extra";
import path from "path";
import { formatFile } from "@figus/utils";

export async function generateIndex({
    output,
    components,
    framework,
}: {
    output: Options["output"];
    components: { componentName?: string; paths?: string }[];
    framework: Frameworks;
}) {
    if (!output) {
        return;
    }
    const templateHbs = Handlebars.compile(template);
    const result = templateHbs({ components, framework });
    await fse.writeFile(path.join(output, "index.ts"), result);
    await formatFile(path.join(output, "index.ts"));
}

const template = `
import { addCollection } from "@iconify/{{framework}}";
addCollection({
   prefix: 'my-icons',
   icons: {
 {{#each components}} 
       '{{this.componentName}}': {
           body:
               '{{{paths}}}',
       },
 {{/each}}
    },
   width: 24,
   height: 24,
});
`;
