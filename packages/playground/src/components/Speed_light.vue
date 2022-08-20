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
            d="M3.5 14A8.5 8.5 0 0 1 12 5.5a8.5 8.5 0 0 1 8.5 8.5"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M9.5 15a2.5 2.5 0 0 1 3.457-2.31 2.501 2.501 0 0 1 1.353 1.353 2.5 2.5 0 0 1 .19.957"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="m13.5 12.5 2-3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M20.5 14v.5a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1V14"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "speedLight",
} as DefineComponent;
</script>
