# App Configs

App configs are the central configuration files where you specify global settings for Figus. Beyond just Figma-specific settings, app configs allow you to define fundamental parameters such as the "output path" or the specific "framework" you wish to generate components for.

```ts
export default {
  // These are app level configs.
    output: "test",
    framework: "vue",
    path: "./src/assets",
  ...
}
```

## output

- **Type**: `string`
- **Required**: `true`

Defines the directory where the components will be saved.

```ts
export default {
  output: "icons/components"
}
```

## framework

- **Type**: `vue | react | react-mui`
- **Required**: `true`

Specifies the framework for which components should be generated: Vue, React, or React-MUI.

```ts
export default {
  framework: 'react-mui'
}
```

## path

- **Type**: `string`
- **Required**: `true`

This is used by `figus generate` when you only want to generate components without downloading from Figma. The path indicates the location of the SVGs.

```ts
export default {
  path: 'src/assets/svg'
}
```

## Iconify

- **Type**: `boolean`
- **Required**: `false`

When set to `true`, the generator will create an Iconify icon collection. The generated collection can then be used directly with Iconify. For more details, click [here](https://docs.iconify.design/icon-components/bundles/wrapper.html).

```ts
export default {
    iconify: true
}
```

## template

- **Type**: `string`
- **Required**: `false` (only required when the React framework is selected)

Allows you to provide a mustache template file which will then be used to generate components for any of the supported frameworks.

```ts
export default {
  template: 'src/templates/icon.mustache'
}
```

Example of a mustache template:

```js
const {{{componentName}}} = () => {
    return <>
        {{{paths}}}
    </>
}
```

Available Mustache variables:
- `componentName`: Defaults to the icon's name. If a component name function is provided in the config, the result will be utilized.
- `paths`: Represents the SVG paths, including the `<svg>` element.

## getComponentName

- **Type**: `(svgObject: ParsedPath, innerPath: string, options: Options) => string`
- **Required**: `false`

This function should return a string that defines the component name, allowing you to customize the naming of the output components.

```ts
export default {
    getComponentName: (svgObject, innerPath, options) => {
        return camelCase(svgObject.base)
    }
}
```