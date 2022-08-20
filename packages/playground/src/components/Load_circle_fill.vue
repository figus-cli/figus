<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m7.086 13.07-1.702-1.363A6.99 6.99 0 0 0 5 14a7 7 0 1 0 14 0 6.99 6.99 0 0 0-.384-2.293l-1.702 1.362A5.031 5.031 0 0 1 17 14a5 5 0 1 1-9.914-.93Z"
            clip-rule="evenodd"
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
    name: "loadCircleFill",
} as DefineComponent;
</script>
