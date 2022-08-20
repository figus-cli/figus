<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="4"
            height="13"
            x="18"
            y="7"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            rx="1"
        />
        <rect
            width="4"
            height="7"
            x="10"
            y="13"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            rx="1"
        />
        <rect
            width="4"
            height="11"
            x="2"
            y="9"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            rx="1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "stat",
} as DefineComponent;
</script>
