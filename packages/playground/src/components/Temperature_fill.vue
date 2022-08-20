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
            d="M12 3a3 3 0 0 0-3 3v5.5c0 .315-.152.606-.384.819a5 5 0 1 0 6.768 0A1.126 1.126 0 0 1 15 11.5V6a3 3 0 0 0-3-3Zm2 13a2 2 0 1 1-3-1.732V6a1 1 0 1 1 2 0v8.268A2 2 0 0 1 14 16Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "temperatureFill",
} as DefineComponent;
</script>
