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
            stroke-width="2"
            d="M8 3v3m0 8v3"
        />
        <rect
            width="4"
            height="8"
            x="6"
            y="6"
            stroke="currentColor"
            stroke-width="2"
            rx=".8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16 7v5m0 5v3"
        />
        <rect
            width="4"
            height="5"
            x="14"
            y="12"
            stroke="currentColor"
            stroke-width="2"
            rx=".8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "candlestick",
} as DefineComponent;
</script>
