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
            d="m12 4-.354-.353.354-.354.354.353L12 4Zm.5 15a.5.5 0 0 1-1 0h1ZM5.646 9.646l6-6 .708.708-6 6-.708-.708Zm6.708-6 6 6-.708.708-6-6 .708-.707ZM12.5 4v15h-1V4h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowTopLight",
} as DefineComponent;
</script>
