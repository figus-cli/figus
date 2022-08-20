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
            fill-opacity=".24"
            d="M5 8a12.043 12.043 0 0 0 14 0v10a14.109 14.109 0 0 1-14 0V8Z"
        />
        <ellipse
            cx="12"
            cy="7"
            stroke="currentColor"
            stroke-width="1.2"
            rx="7"
            ry="3"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M5 13v4c0 1.657 3.134 3 7 3s7-1.343 7-3v-4"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M5 7v5c0 1.657 3.134 3 7 3s7-1.343 7-3V7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "databaseDuotone",
} as DefineComponent;
</script>
