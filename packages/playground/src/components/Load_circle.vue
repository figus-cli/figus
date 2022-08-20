<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5.239 14.812a7 7 0 0 0 13.523 0"
        />
        <path
            fill="currentColor"
            d="m12 13-.625.78.625.5.625-.5L12 13Zm1-9a1 1 0 1 0-2 0h2ZM6.375 9.78l5 4 1.25-1.56-5-4-1.25 1.561Zm6.25 4 5-4-1.25-1.56-5 4 1.25 1.56ZM13 13V4h-2v9h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadCircle",
} as DefineComponent;
</script>
