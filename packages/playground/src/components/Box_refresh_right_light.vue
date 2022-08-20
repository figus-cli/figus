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
            d="m14 16 .354-.354.353.354-.353.354L14 16Zm-3.646-4.354 4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708Z"
        />
        <path
            stroke="currentColor"
            d="M20 13.5V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxRefreshRightLight",
} as DefineComponent;
</script>
