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
            d="M9 7h4m-4 8h3m-3-4h6"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M19 11V9c0-2.828 0-4.243-.879-5.121C17.243 3 15.828 3 13 3h-2c-2.828 0-4.243 0-5.121.879C5 4.757 5 6.172 5 9v6c0 2.828 0 4.243.879 5.121C6.757 21 8.172 21 11 21h1"
        />
        <circle
            cx="17.5"
            cy="17.5"
            r="2.5"
            stroke="currentColor"
            stroke-width="2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m21 21-1.5-1.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDockSearch",
} as DefineComponent;
</script>
