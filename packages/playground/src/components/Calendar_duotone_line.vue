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
            stroke-width="1.2"
            d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10v1H3v-1Z"
        />
        <rect
            width="18"
            height="15"
            x="3"
            y="6"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M9 16h6"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="M8 3v4m8-4v4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "calendarDuotoneLine",
} as DefineComponent;
</script>
