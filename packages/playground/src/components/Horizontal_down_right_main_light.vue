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
            d="m2 8-.354-.354L1.293 8l.354.354L2 8Zm10 .5a.5.5 0 0 0 0-1v1ZM5.646 3.646l-4 4 .707.708 4-4-.706-.707Zm-4 4.708 4 4 .708-.708-4-4-.708.708ZM2 8.5h10v-1H2v1ZM22 16l.354-.354.353.354-.353.354L22 16Zm-19 .5a.5.5 0 0 1 0-1v1Zm15.354-4.854 4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708ZM22 16.5H3v-1h19v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "horizontalDownRightMainLight",
} as DefineComponent;
</script>
