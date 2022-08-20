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
            d="m22 8 .354-.354.353.354-.353.354L22 8Zm-10 .5a.5.5 0 0 1 0-1v1Zm6.354-4.854 4 4-.708.708-4-4 .708-.707Zm4 4.708-4 4-.708-.708 4-4 .708.708ZM22 8.5H12v-1h10v1ZM2 16l-.354-.354-.353.354.354.354L2 16Zm19 .5a.5.5 0 0 0 0-1v1ZM5.646 11.646l-4 4 .707.708 4-4-.706-.708Zm-4 4.708 4 4 .708-.708-4-4-.708.708ZM2 16.5h19v-1H2v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "horizontalDownLeftMainLight",
} as DefineComponent;
</script>
