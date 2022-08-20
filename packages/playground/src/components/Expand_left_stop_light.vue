<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            d="m11 12-.354-.354-.353.354.353.354L11 12Zm5.646-6.354-6 6 .708.708 6-6-.708-.708Zm-6 6.708 6 6 .708-.708-6-6-.708.708Z"
        />
        <path stroke="currentColor" d="M6 7v10" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandLeftStopLight",
} as DefineComponent;
</script>
