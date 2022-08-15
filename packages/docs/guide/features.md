---
title: Features | Guide
outline: deep
---

# Features

## Download and Generate
```bash
npx @figus/cli --token="figma token"
```
Figus will download icons from Figma and will generate components automatically

## Generate mode


```bash
npx @figus/cli generate
```
Figus can generate components from a pre-existing SVGs:

## Download mode

```bash
npx @figus/cli download --token="figma token"
```

Figus can download icons from Figma without generating components
This can be useful in case of caching where you do not want to download from Figma each time

## Iconify Generation
```bash
npx @figus/cli generate --iconify
```

Generate a iconify custom set of icons for the configured framework.
More info [here](https://docs.iconify.design/icon-components/bundles/wrapper.html)
