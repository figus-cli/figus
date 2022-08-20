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
            height="7"
            x="4"
            y="4"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            rx="1"
        />
        <rect
            width="6"
            height="5"
            x="4"
            y="15"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            rx="1"
        />
        <rect
            width="6"
            height="5"
            x="14"
            y="4"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            rx="1"
        />
        <rect
            width="6"
            height="7"
            x="14"
            y="13"
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
    name: "darhboardAlt",
} as DefineComponent;
</script>
