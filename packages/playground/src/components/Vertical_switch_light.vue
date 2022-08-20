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
            d="m8 20-.354.354.354.353.354-.353L8 20Zm2-13.5a.5.5 0 0 0 0-1v1ZM4.646 17.354l3 3 .708-.708-3-3-.708.708Zm3.708 3 3-3-.708-.708-3 3 .708.708ZM8.5 20V8h-1v12h1Zm0-12A1.5 1.5 0 0 1 10 6.5v-1A2.5 2.5 0 0 0 7.5 8h1ZM16 4l-.354-.353.354-.354.354.353L16 4Zm0 13h.5-.5Zm-2 2.5a.5.5 0 0 1 0-1v1ZM12.646 6.646l3-3 .708.708-3 3-.708-.708Zm3.708-3 3 3-.708.708-3-3 .708-.707ZM16.5 4v13h-1V4h1Zm0 13a2.5 2.5 0 0 1-2.5 2.5v-1a1.5 1.5 0 0 0 1.5-1.5h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "verticalSwitchLight",
} as DefineComponent;
</script>
