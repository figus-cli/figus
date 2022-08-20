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
            stroke-width="1.2"
            d="M7.05 7.05 4 4m12.95 3.05L20 4m0 16-3.05-3.05M4 20l3.05-3.05"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-4a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M18.4 12a6.4 6.4 0 0 1-6.4 6.4v1.2a7.6 7.6 0 0 0 7.6-7.6h-1.2ZM12 5.6a6.4 6.4 0 0 1 6.4 6.4h1.2A7.6 7.6 0 0 0 12 4.4v1.2ZM5.6 12A6.4 6.4 0 0 1 12 5.6V4.4A7.6 7.6 0 0 0 4.4 12h1.2Zm6.4 6.4A6.4 6.4 0 0 1 5.6 12H4.4a7.6 7.6 0 0 0 7.6 7.6v-1.2Zm2.4-6.4a2.4 2.4 0 0 1-2.4 2.4v1.2a3.6 3.6 0 0 0 3.6-3.6h-1.2ZM12 9.6a2.4 2.4 0 0 1 2.4 2.4h1.2A3.6 3.6 0 0 0 12 8.4v1.2ZM9.6 12A2.4 2.4 0 0 1 12 9.6V8.4A3.6 3.6 0 0 0 8.4 12h1.2Zm2.4 2.4A2.4 2.4 0 0 1 9.6 12H8.4a3.6 3.6 0 0 0 3.6 3.6v-1.2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "targetDuotoneLine",
} as DefineComponent;
</script>
