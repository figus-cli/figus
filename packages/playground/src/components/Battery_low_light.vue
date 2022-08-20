<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="9"
            height="14"
            x="7.5"
            y="6.5"
            stroke="currentColor"
            rx="1.5"
        />
        <rect width="6" height="3" x="9" y="16" fill="currentColor" rx=".8" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9.293 3.293C9 3.586 9 4.057 9 5h6c0-.943 0-1.414-.293-1.707C14.414 3 13.943 3 13 3h-2c-.943 0-1.414 0-1.707.293Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "batteryLowLight",
} as DefineComponent;
</script>
