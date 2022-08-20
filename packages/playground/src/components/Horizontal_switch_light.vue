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
            d="m4 8-.353-.354L3.292 8l.353.354L4 8Zm15.5 2a.5.5 0 0 0 1 0h-1ZM7.646 3.646l-4 4 .708.708 4-4-.708-.707Zm-4 4.708 4 4 .708-.708-4-4-.707.708ZM4 8.5h14v-1H4v1Zm14 0a1.5 1.5 0 0 1 1.5 1.5h1A2.5 2.5 0 0 0 18 7.5v1Zm2 7.5.354-.354.353.354-.353.354L20 16ZM5 16v.5-.5Zm-2.5-2a.5.5 0 0 1 1 0h-1Zm13.854-2.354 4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708ZM20 16.5H5v-1h15v1Zm-15 0A2.5 2.5 0 0 1 2.5 14h1A1.5 1.5 0 0 0 5 15.5v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "horizontalSwitchLight",
} as DefineComponent;
</script>
