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
            stroke-width="2"
            d="M20 4 4 20"
        />
        <circle
            cx="6.5"
            cy="7.5"
            r="3.5"
            stroke="currentColor"
            stroke-width="2"
        />
        <circle
            cx="17.5"
            cy="16.5"
            r="3.5"
            stroke="currentColor"
            stroke-width="2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "percent",
} as DefineComponent;
</script>
