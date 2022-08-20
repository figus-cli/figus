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
            d="m12 3-.354-.353.354-.354.354.353L12 3Zm.5 11a.5.5 0 0 1-1 0h1ZM6.646 7.646l5-5 .708.707-5 5-.708-.706Zm5.708-5 5 5-.708.708-5-5 .708-.707ZM12.5 3v11h-1V3h1Z"
        />
        <path
            fill="currentColor"
            d="m12 21-.354.354.354.353.354-.353L12 21Zm.5-7a.5.5 0 0 0-1 0h1Zm-5.854 2.354 5 5 .708-.708-5-5-.708.708Zm5.708 5 5-5-.708-.708-5 5 .708.708ZM12.5 21v-7h-1v7h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fluidLight",
} as DefineComponent;
</script>
