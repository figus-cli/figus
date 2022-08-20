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
            d="m18 20-.354.354.354.353.354-.353L18 20ZM13 4.5a.5.5 0 0 0 0 1v-1Zm.646 11.854 4 4 .708-.708-4-4-.708.708Zm4.708 4 4-4-.708-.708-4 4 .708.708ZM18.5 20V9h-1v11h1ZM14 4.5h-1v1h1v-1ZM18.5 9A4.5 4.5 0 0 0 14 4.5v1A3.5 3.5 0 0 1 17.5 9h1ZM6 4l.354-.353L6 3.292l-.354.353L6 4Zm5 15.5a.5.5 0 0 0 0-1v1Zm-.646-11.854-4-4-.708.708 4 4 .708-.708Zm-4.708-4-4 4 .707.708 4-4-.706-.707ZM5.5 4v11h1V4h-1ZM10 19.5h1v-1h-1v1ZM5.5 15a4.5 4.5 0 0 0 4.5 4.5v-1A3.5 3.5 0 0 1 6.5 15h-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "regroupLight",
} as DefineComponent;
</script>
