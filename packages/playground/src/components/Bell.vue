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
            d="M6.448 7.97a5.586 5.586 0 0 1 11.104 0l.252 2.266.006.057a8 8 0 0 0 1.074 3.18l.03.05.577.963c.525.874.787 1.311.73 1.67a1 1 0 0 1-.345.61c-.279.234-.789.234-1.808.234H5.932c-1.02 0-1.53 0-1.808-.233a1 1 0 0 1-.346-.611c-.056-.359.206-.796.73-1.67l.579-.964.03-.05a8 8 0 0 0 1.073-3.179l.006-.057.252-2.267Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M8 17a4 4 0 0 0 4 4 4 4 0 0 0 4-4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bell",
} as DefineComponent;
</script>
