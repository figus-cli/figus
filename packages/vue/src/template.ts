export function template() {
    return `
<template>
<svg fill="currentColor" viewBox="0 0 {{size}} {{size}}" width="1em" height="1em" v-bind="$attrs">
{{{paths}}}
</svg>
</template>

<script lang="ts">
import type { DefineComponent } from 'vue'
export default ({
  name: "{{ componentName }}",
}) as DefineComponent
</script>
`;
}
