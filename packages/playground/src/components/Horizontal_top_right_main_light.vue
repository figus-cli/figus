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
            d="m22 8 .354-.354.353.354-.353.354L22 8ZM3 8.5a.5.5 0 0 1 0-1v1Zm15.354-4.854 4 4-.708.708-4-4 .708-.707Zm4 4.708-4 4-.708-.708 4-4 .708.708ZM22 8.5H3v-1h19v1ZM2 16l-.354-.354-.353.354.354.354L2 16Zm9 .5a.5.5 0 0 0 0-1v1Zm-5.354-4.854-4 4 .707.708 4-4-.706-.708Zm-4 4.708 4 4 .708-.708-4-4-.708.708ZM2 16.5h9v-1H2v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "horizontalTopRightMainLight",
} as DefineComponent;
</script>
