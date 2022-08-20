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
            d="m12 14-.354.354.354.353.354-.353L12 14Zm.5-9a.5.5 0 0 0-1 0h1ZM6.646 9.354l5 5 .708-.708-5-5-.708.708Zm5.708 5 5-5-.708-.708-5 5 .708.708ZM12.5 14V5h-1v9h1Z"
        />
        <path
            stroke="currentColor"
            d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "importLight",
} as DefineComponent;
</script>
