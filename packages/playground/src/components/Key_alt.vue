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
            d="M3 7c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.093C4.9 3 5.6 3 7 3h10c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C21 4.9 21 5.6 21 7v10c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C19.1 21 18.4 21 17 21H7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3 19.1 3 18.4 3 17V7Z"
        />
        <circle cx="8" cy="12" r="2" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M10 12h4m3 2v-1.85a.15.15 0 0 0-.15-.15H14m0 0v2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "keyAlt",
} as DefineComponent;
</script>
