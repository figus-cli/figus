---
title: Getting Started | Guide
---

# Getting Started

## Overview

Figus is a powerful that helps to create components from a Figma design page
It supports React, React Material UI and Vue

## Adding Vitest to your Project

```bash
# with npm
npm install -D @ficus/cli

# or with yarn
yarn add -D @ficus/cli

# or with pnpm
pnpm add -D @ficus/cli
```

:::tip
Figus requires Node >=v14
:::

## Configuring Figus

- Run `npx @figus/cli init`, and follow the interactive configuration.

```ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    // ...
  },
})
```

See the list of config options in the [Config Reference](../config/)

## Command Line Interface

In a project where Figus is installed, you can use the `figus` binary in your npm scripts, or run it directly with `npx vitest`.

To download and generate icons, just run: `figus`

Learn more about the [Command Line Interface](./cli.md)

## IDE Integrations

We also provided a official extension for Visual Studio Code to enhance your testing experience with Vitest.

[Install from VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ZixuanChen.vitest-explorer)

Learn more about [IDE Integrations](./ide.md)

## Examples

[@@include](../../../examples/README.md)
