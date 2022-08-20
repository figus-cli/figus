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
            d="M10 16H7a4 4 0 0 1 0-8h3m6 4H8m6 4h3a4 4 0 0 0 0-8h-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "linkLight",
} as DefineComponent;
</script>
