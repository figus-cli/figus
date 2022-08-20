<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="none" stroke="currentColor" d="M7.5 3.5v3m0 8v4" />
        <path
            fill="none"
            stroke="currentColor"
            d="M6.8 6.5a1.3 1.3 0 0 0-1.3 1.3v5.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3V7.8a1.3 1.3 0 0 0-1.3-1.3H6.8Z"
        />
        <path fill="none" stroke="currentColor" d="M16.5 6.5v5m0 5v4" />
        <path
            fill="none"
            stroke="currentColor"
            d="M15.8 11.5a1.3 1.3 0 0 0-1.3 1.3v2.4a1.3 1.3 0 0 0 1.3 1.3h1.4a1.3 1.3 0 0 0 1.3-1.3v-2.4a1.3 1.3 0 0 0-1.3-1.3h-1.4Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "candlestickLight",
} as DefineComponent;
</script>
