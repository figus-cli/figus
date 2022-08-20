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
            d="m8 2-.354-.354L8 1.293l.354.354L8 2Zm.5 15a.5.5 0 0 1-1 0h1ZM3.646 5.646l4-4 .708.707-4 4-.707-.706Zm4.708-4 4 4-.708.708-4-4 .708-.708ZM8.5 2v15h-1V2h1ZM16 22l-.354.354.354.353.354-.353L16 22Zm.5-15a.5.5 0 0 0-1 0h1Zm-4.854 11.354 4 4 .708-.708-4-4-.708.708Zm4.708 4 4-4-.708-.708-4 4 .708.708ZM16.5 22V7h-1v15h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortArrowLight",
} as DefineComponent;
</script>
