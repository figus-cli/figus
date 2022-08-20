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
            d="M5.5 10.5a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4h-5a4 4 0 0 1-4-4v-7Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M8.5 12.5h-1a2 2 0 0 1-2-2 4 4 0 0 1 4-4h5a4 4 0 0 1 4 4 2 2 0 0 1-2 2h-1m-5 0h3m1 7h-5a2 2 0 0 1-2-2 1 1 0 0 1 1-1h7a1 1 0 0 1 1 1 2 2 0 0 1-2 2Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M10.5 13.5v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0Zm5 0v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M18.5 14.5h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H18m-12.5-5h-1a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2H6m3.5-13v-1a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "basketLight",
} as DefineComponent;
</script>
