<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="6"
            height="11"
            x="9"
            y="3"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            rx="3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 11a7 7 0 0 0 11.95 4.95A7 7 0 0 0 19 11m-7 10v-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mic",
} as DefineComponent;
</script>
