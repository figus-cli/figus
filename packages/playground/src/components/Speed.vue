<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 14a8 8 0 0 1 8-8 8 8 0 0 1 8 8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 15a2 2 0 0 1 .586-1.414 2 2 0 0 1 2.828 0A2 2 0 0 1 14 15"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="m13 13 2-3m5 4v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "speed",
} as DefineComponent;
</script>
