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
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            d="M5.6 7A1.4 1.4 0 0 1 7 5.6h8A3.4 3.4 0 0 1 18.4 9v8a1.4 1.4 0 0 1-1.4 1.4H7A1.4 1.4 0 0 1 5.6 17V7Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M9 6V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6.4A6.4 6.4 0 0 1 21.4 9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "itoDuotone",
} as DefineComponent;
</script>
