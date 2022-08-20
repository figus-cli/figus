<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            d="M17 11a1 1 0 1 1 0 2v-2ZM3 13a1 1 0 1 1 0-2v2Zm14 0H3v-2h14v2Z"
        />
        <path
            fill="currentColor"
            d="m21.715 11.797-5.45-3.893a.8.8 0 0 0-1.265.65v6.891a.8.8 0 0 0 1.265.651l5.45-3.893a.25.25 0 0 0 0-.406Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowRightLong",
} as DefineComponent;
</script>
