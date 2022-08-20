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
            d="M5 16c5.333 0 5.333-7.429 0-8m12 8c5.333 0 5.333-7.429 0-8m-6 8c5.333 0 5.333-7.429 0-8m6.5 8H5m12-8H5"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M5 16a2 2 0 1 1 .518-3.932"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "roll",
} as DefineComponent;
</script>
