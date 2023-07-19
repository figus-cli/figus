# Introduction

Place your configuration file at the root `figus.config.js`.
```
.
├─ figus.config.js
└─ package.json
```

You can also use `npx @figus/cli init` to initialize a config using our interactive UI
All options can also be passed as CLI options:
```shell
npx @figus/cli --figma.token="token" figma.fileKey="zz" --figma.pageName="Icons" --output="src/components" 
```

Figus have one config object [App Configs](./app-configs). 


## Config Intellisense

Since Figus ships with TypeScript typings, you can leverage your IDE's intellisense with jsdoc type hints:

```js
/**
 * @type {import('@figus/cli').UserConfig}
 */
const config = {
  // ...
}

export default config
```

Alternatively, you can use the `defineConfig` helper at which should provide intellisense without the need for jsdoc annotations:

```js
import { defineConfig } from '@figus/cli'

export default defineConfig({
  // ...
})
```

## Example config 

[CB Insights](https://www.cbinsights.com/) heavily customizes the config for their use case:

```js
import { defineConfig } from '@figus/cli';
import dotenv from 'dotenv';
import { pascalCase } from 'change-case';

dotenv.config();

export default defineConfig({
  getFileName: (svgPathObj) => {
    return `${pascalCase(svgPathObj.name)}Icon.tsx`;
  },
  output: 'packages/cbicons/src/components',
  template: 'packages/cbicons/src/icon.mustache',
  framework: 'react',
  getComponentName: (name) => `${name}Icon`,
  path: './packages/cbicons/src/assets',
  figma: {
    fileKey: 'qEm8vdvuoqzn51sx1JOngS',
    // Create a .env file and put your token there
    token: process.env.FIGMA_API_TOKEN,
  },
  iconify: false,
});
```