<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="7"
            height="7"
            x="3"
            y="3"
            stroke="currentColor"
            stroke-width="2"
            rx="1"
        />
        <rect
            width="7"
            height="7"
            x="3"
            y="14"
            stroke="currentColor"
            stroke-width="2"
            rx="1"
        />
        <rect
            width="7"
            height="7"
            x="14"
            y="3"
            stroke="currentColor"
            stroke-width="2"
            rx="1"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M17.5 14v7m3.5-3.5h-7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "widgetAdd",
} as DefineComponent;
</script>
