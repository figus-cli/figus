<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="12"
            cy="12"
            r="8.4"
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width="1.2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="m16 8-8 8m0-8 8 8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "closeSquareDuotoneLine",
} as DefineComponent;
</script>
