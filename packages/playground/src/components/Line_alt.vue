<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="4"
            height="4"
            x="6"
            y="13"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
            transform="rotate(90 6 13)"
        />
        <rect
            width="4"
            height="4"
            x="17"
            y="12"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
            transform="rotate(-90 17 12)"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m18 11-1.5 1.5c-1.017 1.017-1.526 1.526-2.137 1.638a2.002 2.002 0 0 1-.726 0c-.611-.112-1.12-.62-2.137-1.638-1.017-1.017-1.526-1.526-2.137-1.638a2.002 2.002 0 0 0-.726 0c-.611.112-1.12.62-2.137 1.638L5 14"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lineAlt",
} as DefineComponent;
</script>
