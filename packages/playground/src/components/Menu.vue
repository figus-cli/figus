<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="16"
            height="5"
            x="4"
            y="5"
            stroke="currentColor"
            stroke-linejoin="round"
            rx="1"
        />
        <rect
            width="16"
            height="5"
            x="4"
            y="14"
            stroke="currentColor"
            stroke-linejoin="round"
            rx="1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "menu",
} as DefineComponent;
</script>
