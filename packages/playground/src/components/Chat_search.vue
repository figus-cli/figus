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
            d="M11.461 20H4a1 1 0 0 1-1-1V8a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v3.385M7 14h3m-3-4h6"
        />
        <circle
            cx="16.5"
            cy="15.5"
            r="2.5"
            stroke="currentColor"
            stroke-width="2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m18.5 17.5 3 3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatSearch",
} as DefineComponent;
</script>
