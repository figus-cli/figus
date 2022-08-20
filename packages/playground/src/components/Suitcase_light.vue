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
            d="M6.5 8.5a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-9a1 1 0 0 1-1-1v-10Zm2 11v1a1 1 0 1 0 2 0v-1m3 0v1a1 1 0 1 0 2 0v-1m-6-12v-3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "suitcaseLight",
} as DefineComponent;
</script>
