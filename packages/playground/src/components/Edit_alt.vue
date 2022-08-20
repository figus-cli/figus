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
            d="m6 21-.189-3.025C5.371 10.944 10.955 5 18 5l-1.217.974A10.079 10.079 0 0 0 13 13.844a3.36 3.36 0 0 1-4.064 3.285L6 16.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "editAlt",
} as DefineComponent;
</script>
