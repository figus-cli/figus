---
title: Features | CLI
---

# CLI

Figus comes with a built-in command line interface that accepts the same config as [App Config](../config/app-configs.md)
All configuration can be passed as arguments, for example:
```bash
npx @figus/cli --path './src/assets' --output './src/icons' --token "figma token" --page-name "figma page name" --file-key "figma file key"
```


## Commands

### init
Create a configuration file

```bash
npx @figus/cli init
```

### default

Calling figus without any command will execute the default command.
Download files from Figma and generate components

```bash
npx @figus/cli 
```

### download

Only download assets to the configured path, or by providing an --path argument. 

```bash
npx @figus/cli download 
```

### generate

Only generate components from existing assets, saved in --output argument or configuration 

```bash
npx @figus/cli generate 
```

### explorer 

Explore all the available icons (icons need to be downloaded first), in a prebuilt demo site

```bash
npx @figus/cli explorer 
```
