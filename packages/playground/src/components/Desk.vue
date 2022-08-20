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
            height="16"
            x="4"
            y="5"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16 2v4c0 .943 0 1.414-.293 1.707C15.414 8 14.943 8 14 8h-4c-.943 0-1.414 0-1.707-.293C8 7.414 8 6.943 8 6V2m1 12h6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "desk",
} as DefineComponent;
</script>
