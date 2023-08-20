# Features

## Download and Generate

With just the Figma token, Figus will download icons from Figma and generate components automatically for you.

```bash
npx @figus/cli --token="figma token"
```

## Generate Mode

Figus is capable of generating components from pre-existing SVGs:

```bash
npx @figus/cli generate
```

## Download Mode

Figus allows you to download icons directly from Figma without automatically generating components. This feature can be particularly beneficial for caching purposes, eliminating the need to re-download from Figma every time.

```bash
npx @figus/cli download --token="figma token"
```

## Iconify Generation

Use this command to generate a custom set of icons for the configured framework using Iconify.

```bash
npx @figus/cli generate --iconify
```

For more information on Iconify and its integration, click [here](https://docs.iconify.design/icon-components/bundles/wrapper.html).

## Icon Explorer

To view all available icons, use the following command. Do note that the SVGs must be downloaded from Figma in advance. For downloading, use the command `npx @figus/cli download`.

```bash
npx @figus/cli explorer
```