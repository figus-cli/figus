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
            d="m12 18-.354.354.354.353.354-.353L12 18Zm.5-12a.5.5 0 0 0-1 0h1Zm-4.854 8.354 4 4 .708-.708-4-4-.708.708Zm4.708 4 4-4-.708-.708-4 4 .708.708ZM12.5 18V6h-1v12h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowAltLdownAlt",
} as DefineComponent;
</script>
