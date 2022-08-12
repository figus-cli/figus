# App Configs

App configs are where you can define the global settings for Figus. App configs define fundamental settings that are not only limited to the figma settings such as configuration for "output path", or the "framework" to generate components for.

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

- Type: `string`
- Required: `true`

Where to save the components to

```ts
export default {
  output: "icons/components"
}
```

## framework

- Type: `vue | react | react-mui`
- Required: `true`

The framework which we want to generate components for, i.e Vue, React, or React-Mui

```ts
export default {
  framework: 'react-mui'
}
```

## path

- Type: `string`
- Required: `true`

Used by `figus generate` when we only want to generate components, without downloading from figma. the path will indicate where the svgs are located

```ts
export default {
  path: 'src/assets/svg'
}
```

## template

- Type: `string`
- Required: `false` (only required when React framework is used)

Provide a mustache template file, will be used to generate components in either of the supported frameworks.


```ts
export default {
  template: 'src/templates/icon.mustache'
}
```

example of mustache file:

```js
const {{{componentName}}} = () => {
    return <>
        {{{paths}}}
    </>
}

```

available Mustache variables:
- `componentName` - the component name, will default to the icon name, or if component name function is in the config, the result will be used.
- `paths` - the SVG paths, includes the `<svg>` element
## getComponentName

- Type: `(svgObject: ParsedPath, innerPath: string, options: Options) => string`
- Required: `false`

The function should return the component name (`string`) to allow customizing the output components name

```ts
export default {
    getComponentName: (svgObject, innerPath, options) => {
        return camelCase(svgObject.base)
    }
}
```
