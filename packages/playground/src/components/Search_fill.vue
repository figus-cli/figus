<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="currentColor" d="M18 11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" />
        <path stroke="currentColor" stroke-width="2" d="m20 20-2-2" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "searchFill",
} as DefineComponent;
</script>
