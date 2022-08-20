<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="14"
            height="6"
            x="5"
            y="13"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            fill="currentColor"
            d="M9.854 13.146a.5.5 0 0 0-.708.708l.708-.708ZM12 16l-.354.354.354.353.354-.353L12 16Zm2.854-2.146a.5.5 0 0 0 0-.708.5.5 0 0 0-.708 0l.708.708ZM12.5 6a.5.5 0 0 0-1 0h1Zm-3.354 7.854 2.5 2.5.708-.708-2.5-2.5-.708.708Zm3.208 2.5 2.5-2.5-.708-.708-2.5 2.5.708.708ZM12.5 16V6h-1v10h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "importDuotone",
} as DefineComponent;
</script>
