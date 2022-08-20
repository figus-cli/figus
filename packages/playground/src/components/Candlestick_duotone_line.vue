<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" stroke-opacity=".24" d="M7.5 3.5v3m0 8v4" />
        <path
            fill="currentColor"
            d="M5 7.8A1.8 1.8 0 0 1 6.8 6h1.4A1.8 1.8 0 0 1 10 7.8v5.4A1.8 1.8 0 0 1 8.2 15H6.8A1.8 1.8 0 0 1 5 13.2V7.8Z"
        />
        <path
            stroke="currentColor"
            stroke-opacity=".24"
            d="M16.5 6.5v5m0 5v4"
        />
        <path
            fill="currentColor"
            d="M14 12.8a1.8 1.8 0 0 1 1.8-1.8h1.4a1.8 1.8 0 0 1 1.8 1.8v2.4a1.8 1.8 0 0 1-1.8 1.8h-1.4a1.8 1.8 0 0 1-1.8-1.8v-2.4Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "candlestickDuotoneLine",
} as DefineComponent;
</script>
