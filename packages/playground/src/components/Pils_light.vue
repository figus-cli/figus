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
            d="m9 16 7-7a3.536 3.536 0 0 0-5-5l-7 7a3.536 3.536 0 0 0 5 5Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M12.5 12.5a9.52 9.52 0 0 1-5-5"
        />
        <circle
            cx="16.5"
            cy="16.5"
            r="4"
            stroke="currentColor"
            stroke-linejoin="round"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="m19 14-5 5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pilsLight",
} as DefineComponent;
</script>
