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
            stroke-width="1.2"
            d="m5 8 5 8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M18.722 20.5a17 17 0 0 0 0-17M14.392 18a12 12 0 0 0 0-12"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="M9.928 16a8 8 0 0 0 0-8m-4.856 8a8 8 0 0 1 0-8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "nfcDuotoneLine",
} as DefineComponent;
</script>
