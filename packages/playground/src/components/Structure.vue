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
            y="4"
            stroke="currentColor"
            stroke-width="2"
            rx="1"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M4 17c0-.943 0-1.414.293-1.707C4.586 15 5.057 15 6 15h3v3c0 .943 0 1.414-.293 1.707C8.414 20 7.943 20 7 20H6c-.943 0-1.414 0-1.707-.293C4 19.414 4 18.943 4 18v-1Zm11-2h3c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v1c0 .943 0 1.414-.293 1.707C19.414 20 18.943 20 18 20h-1c-.943 0-1.414 0-1.707-.293C15 19.414 15 18.943 15 18v-3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "structure",
} as DefineComponent;
</script>
