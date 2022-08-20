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
            d="m9 13-.354-.354.354-.353.354.353L9 13Zm.5 9a.5.5 0 0 1-1 0h1Zm-5.854-4.354 5-5 .708.708-5 5-.707-.708Zm5.708-5 5 5-.708.708-5-5 .708-.708ZM9.5 13v9h-1v-9h1Zm5.5-2-.354.354.354.353.354-.353L15 11Zm.5-9a.5.5 0 0 0-1 0h1ZM9.646 6.354l5 5 .708-.708-5-5-.708.708Zm5.708 5 5-5-.708-.708-5 5 .708.708ZM15.5 11V2h-1v9h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "collapseLight",
} as DefineComponent;
</script>
