# Figma Configs

Figma configs are where you can define figma settings for Figus. Figma configs define fundamental settings that are required in order to integrate with Figma's REST API

```ts
export default {
    // These are figma level configs.
    ...,
    figma: {
        pageName: "Icon",
        fileKey: "fileKey",
        token: "figma token"
    },
    ...
}
```

## pageName

- Type: `string`
- Required: `true`

The page name where the icons library sits in Figma. [See how to](../guide/figma.md) find that information in Figma

```ts
export default {
  figma: {
      pageName: "Icons"
  }
}
```

## fileKey

- Type: `string`
- Required: `true`

The file key name where the icons library sits in Figma. [See how to](../guide/figma.md) find that information in Figma

```ts
export default {
  fileKey: 'ddk2DXkqwyZ'
}
```

## token

- Type: `string`
- Required: `true`

We must have a Figma token to integrate with the API, to get a new token, follow [these instructions](https://www.figma.com/developers/api)
Login to Figma, then you can click on `Get personal access token`

```ts
export default {
  token: 'figd_5zdkzZdv9evo00akdUGxapz90rJdf_HmZ1AiMVTt'
}
```
