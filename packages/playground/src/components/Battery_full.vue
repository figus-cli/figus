<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="10"
            height="15"
            x="7"
            y="6"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
        />
        <rect width="6" height="11" x="9" y="8" fill="currentColor" rx=".8" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9.293 1.293C9 1.586 9 2.057 9 3h6c0-.943 0-1.414-.293-1.707C14.414 1 13.943 1 13 1h-2c-.943 0-1.414 0-1.707.293Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "batteryFull",
} as DefineComponent;
</script>
