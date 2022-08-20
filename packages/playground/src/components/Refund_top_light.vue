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
            d="m8 4 .354-.353L8 3.292l-.354.353L8 4Zm11.5 5a.5.5 0 0 0-1 0h1Zm-6.146-.354-5-5-.708.708 5 5 .708-.708Zm-5.708-5-5 5 .707.708 5-5-.706-.707ZM7.5 4v10.5h1V4h-1Zm12 10.5V9h-1v5.5h1Zm-6 6a6 6 0 0 0 6-6h-1a5 5 0 0 1-5 5v1Zm-6-6a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5h-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refundTopLight",
} as DefineComponent;
</script>
