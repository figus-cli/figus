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
            height="6"
            x="4"
            y="4"
            stroke="currentColor"
            stroke-linejoin="round"
            rx="1"
        />
        <rect
            width="6"
            height="6"
            x="4"
            y="14"
            stroke="currentColor"
            stroke-linejoin="round"
            rx="1"
        />
        <rect
            width="6"
            height="6"
            x="14"
            y="14"
            stroke="currentColor"
            stroke-linejoin="round"
            rx="1"
        />
        <rect
            width="6"
            height="6"
            x="14"
            y="4"
            stroke="currentColor"
            stroke-linejoin="round"
            rx="1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "darhboard",
} as DefineComponent;
</script>
