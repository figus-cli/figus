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
