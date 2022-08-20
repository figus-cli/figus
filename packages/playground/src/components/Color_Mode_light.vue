<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="8.5" stroke="currentColor" />
        <path
            fill="currentColor"
            d="M16.243 7.757a6 6 0 1 0-8.486 8.486L12 12l4.243-4.243Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "colorModeLight",
} as DefineComponent;
</script>
