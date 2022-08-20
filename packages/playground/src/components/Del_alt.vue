<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <ellipse
            cx="12"
            cy="7"
            stroke="currentColor"
            stroke-width="2"
            rx="7"
            ry="3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m5 7 1.996 10.98a.068.068 0 0 0 .019.035 7.05 7.05 0 0 0 9.97 0 .068.068 0 0 0 .019-.036L19 7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "delAlt",
} as DefineComponent;
</script>
