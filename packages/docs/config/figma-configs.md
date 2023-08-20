# Figma Configs

Figma configs allow you to specify Figma settings for Figus. These configurations are essential to seamlessly integrate with Figma's REST API.

```ts
export default {
    // These are Figma-specific configs.
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

- **Type**: `string`
- **Required**: `false`

This is the name of the page in Figma where the icon library is located. To learn how to find this information in Figma, check [here](../guide/figma.md). This configuration is optional since some Figma pages consist solely of icons, eliminating the need to filter by page name. Start by leaving the `pageName` undefined. If you find too many icons or none at all, specify the page name.

```ts
export default {
  figma: {
      pageName: "Icons"
  }
}
```

## fileKey

- **Type**: `string`
- **Required**: `true`

The `fileKey` represents the identifier for the specific Figma file where the icon library is housed. Learn how to determine this key in Figma [here](../guide/figma.md).

```ts
export default {
  fileKey: 'ddk2DXkqwyZ'
}
```

## token

- **Type**: `string`
- **Required**: `true`

To integrate with Figma's API, a token is essential. To obtain a new token, follow the instructions provided [here](https://www.figma.com/developers/api). Once you're logged into Figma, you can obtain your `personal access token`.

```ts
export default {
  token: 'figd_5zdkzZdv9evo00akdUGxapz90rJdf_HmZ1AiMVTt'
}
```