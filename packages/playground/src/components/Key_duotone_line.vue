<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="9"
            cy="14"
            r="4"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="m12 11 3.5-3.5M17 6l-1.5 1.5m0 0L18 10"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "keyDuotoneLine",
} as DefineComponent;
</script>
