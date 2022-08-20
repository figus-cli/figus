<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M9.402 13.5A3 3 0 0 0 12 15a3 3 0 0 0 2.598-1.5"
        />
        <rect
            width="3.25"
            height="2.25"
            x="6.875"
            y="7.875"
            fill="currentColor"
            stroke="currentColor"
            stroke-width=".25"
            rx="1.125"
        />
        <rect
            width="3.25"
            height="2.25"
            x="13.875"
            y="7.875"
            fill="currentColor"
            stroke="currentColor"
            stroke-width=".25"
            rx="1.125"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "happy",
} as DefineComponent;
</script>
