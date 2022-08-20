<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
        <circle
            cx="12"
            cy="18"
            r=".5"
            fill="currentColor"
            stroke="currentColor"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 16v-1.419c0-.944.604-1.782 1.5-2.081a2.194 2.194 0 0 0 1.5-2.081v-.513C15 8.3 13.7 7 12.094 7H12a3 3 0 0 0-3 3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "question",
} as DefineComponent;
</script>
