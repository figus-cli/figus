<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="7"
            cy="7"
            stroke="currentColor"
            transform="rotate(90 7 7)"
            r="3"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M9.5 5H18a2 2 0 1 1 0 4H9.5"
        />
        <circle stroke="currentColor" transform="matrix(0 1 1 0 17 17)" r="3" />
        <path
            fill="none"
            stroke="currentColor"
            d="M14.5 15H6a2 2 0 1 0 0 4h8.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "filterBigAlt",
} as DefineComponent;
</script>
