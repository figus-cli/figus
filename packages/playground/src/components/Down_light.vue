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
            d="m14 20-.354.354.354.353.354-.353L14 20ZM6 3.5a.5.5 0 0 0 0 1v-1Zm2.646 11.854 5 5 .708-.708-5-5-.708.708Zm5.708 5 5-5-.708-.708-5 5 .708.708ZM14.5 20V10h-1v10h1ZM8 3.5H6v1h2v-1Zm6.5 6.5A6.5 6.5 0 0 0 8 3.5v1a5.5 5.5 0 0 1 5.5 5.5h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "downLight",
} as DefineComponent;
</script>
