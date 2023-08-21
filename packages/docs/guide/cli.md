```markdown
---
title: Features | CLI
---

# CLI

Figus boasts a built-in command line interface that is compatible with the same configurations as detailed in [App Config](../config/app-configs.md). For ease, configurations can also be relayed as arguments. Here's a sample:

```bash
npx @figus/cli --path './src/assets' --output './src/icons' --token "figma token" --page-name "figma page name" --file-key "figma file key"
```

## Commands

### init
This command initializes and creates a configuration file:

```bash
npx @figus/cli init
```

### default
By invoking Figus without specifying any command, it defaults to downloading files from Figma and subsequently generating the components:

```bash
npx @figus/cli 
```

### download
Use this to solely download assets either to a pre-configured path or to a destination specified with the `--path` argument:

```bash
npx @figus/cli download 
```

### generate
This focuses on generating components from existing assets. The destination is either pre-configured or provided via the `--output` argument:

```bash
npx @figus/cli generate 
```

### explorer
This feature enables users to peruse all available icons. A prerequisite is that icons need to be downloaded beforehand. The exploration is facilitated via a prebuilt demo site:

```bash
npx @figus/cli explorer 
```
```