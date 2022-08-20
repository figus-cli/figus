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
            stroke-linejoin="round"
            stroke-width="2"
            d="M10.188 5.239A7 7 0 0 1 16.95 7.05a7 7 0 0 1 1.812 6.762"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16.95 16.95a7 7 0 0 1-9.9 0 7 7 0 0 1 0-9.9"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 19 5 5"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M18.035 3.136a4 4 0 0 1 2.829 2.829"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeDelLight",
} as DefineComponent;
</script>
