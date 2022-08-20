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
            d="m16 20-.354.354.354.353.354-.353L16 20ZM4.5 15a.5.5 0 0 0 1 0h-1Zm6.146.354 5 5 .708-.708-5-5-.708.708Zm5.708 5 5-5-.708-.708-5 5 .708.708ZM16.5 20V9.5h-1V20h1ZM4.5 9.5V15h1V9.5h-1Zm6-6a6 6 0 0 0-6 6h1a5 5 0 0 1 5-5v-1Zm6 6a6 6 0 0 0-6-6v1a5 5 0 0 1 5 5h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refundDownLight",
} as DefineComponent;
</script>
