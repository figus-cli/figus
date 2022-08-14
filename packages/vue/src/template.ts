export function template() {
    return `
<template>
{{{paths}}}
</template>

<script lang="ts">
import type { DefineComponent } from 'vue'
export default ({
  name: "{{ componentName }}",
}) as DefineComponent
</script>
`;
}
