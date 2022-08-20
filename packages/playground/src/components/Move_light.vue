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
            d="m12 20 .354.354-.354.353-.354-.353L12 20Zm5.354-4.646-5 5-.708-.708 5-5 .708.708Zm-5.708 5-5-5 .708-.708 5 5-.708.708ZM12 4l.354-.353L12 3.292l-.354.353L12 4Zm5.354 4.646-5-5-.708.708 5 5 .708-.708Zm-5.708-5-5 5 .708.708 5-5-.708-.707Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "moveLight",
} as DefineComponent;
</script>
