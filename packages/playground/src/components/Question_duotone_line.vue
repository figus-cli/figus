<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="12"
            cy="12"
            r="9"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <circle
            cx="12"
            cy="18"
            r=".6"
            fill="currentColor"
            stroke="currentColor"
            stroke-width=".2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M12 16v-.857c0-.714.357-1.381.951-1.777l.599-.4a3.257 3.257 0 0 0 1.45-2.71V10a3 3 0 1 0-6 0"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "questionDuotoneLine",
} as DefineComponent;
</script>
