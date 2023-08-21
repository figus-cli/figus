# Introduction

To set up Figus, place your configuration file at the root with the name `figus.config.js`.

```
.
├─ figus.config.js
└─ package.json
```

For a guided setup, you can use `npx @figus/cli init` to initialize a config through our interactive UI. You can also pass all configuration options directly as CLI parameters:

```shell
npx @figus/cli --figma.token="token" --figma.fileKey="zz" --figma.pageName="Icons" --output="src/components" 
```

Figus utilizes a single configuration object: [App Configs](./app-configs).

## Config Intellisense

Thanks to the TypeScript typings that come with Figus, you can benefit from your IDE's intellisense, augmented by jsdoc type hints:

```js
/**
 * @type {import('@figus/cli').UserConfig}
 */
const config = {
  // ...
}

export default config
```

For a more streamlined approach, you can use the `defineConfig` helper. This method offers intellisense capabilities without the necessity of jsdoc annotations:

```js
import { defineConfig } from '@figus/cli'

export default defineConfig({
  // ...
})
```