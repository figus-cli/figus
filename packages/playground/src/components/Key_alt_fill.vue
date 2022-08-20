<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3 7c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.093C4.9 3 5.6 3 7 3h10c1.4 0 2.1 0 2.635.273a2.5 2.5 0 0 1 1.092 1.092C21 4.9 21 5.6 21 7v10c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C19.1 21 18.4 21 17 21H7c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C3 19.1 3 18.4 3 17V7Zm7.83 4a3.001 3.001 0 1 0 0 2H13v1a1 1 0 1 0 2 0v-1h1v1a1 1 0 1 0 2 0v-1.85A1.15 1.15 0 0 0 16.85 11h-6.02ZM9 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "keyAltFill",
} as DefineComponent;
</script>
