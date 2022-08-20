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
            d="m15.384 12.319-.677.736.677-.736ZM10 6a2 2 0 0 1 2-2V2a4 4 0 0 0-4 4h2Zm0 5.5V6H8v5.5h2ZM8 16c0-1.165.497-2.213 1.293-2.945l-1.354-1.472A5.987 5.987 0 0 0 6 16h2Zm4 4a4 4 0 0 1-4-4H6a6 6 0 0 0 6 6v-2Zm4-4a4 4 0 0 1-4 4v2a6 6 0 0 0 6-6h-2Zm-1.293-2.945A3.987 3.987 0 0 1 16 16h2a5.987 5.987 0 0 0-1.94-4.417l-1.353 1.472ZM14 6v5.5h2V6h-2Zm-2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Zm4.06 7.583a.247.247 0 0 1-.054-.07c-.008-.016-.006-.02-.006-.013h-2c0 .645.31 1.19.707 1.555l1.354-1.472ZM8 11.5c0-.006.002-.003-.006.013a.246.246 0 0 1-.055.07l1.354 1.472c.397-.365.707-.91.707-1.555H8Z"
        />
        <circle cx="12" cy="16" r="2" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "temperature",
} as DefineComponent;
</script>
