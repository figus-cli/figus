<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            fill="currentColor"
            fill-opacity=".24"
            transform="matrix(0 -1 -1 0 12 14)"
            r="6"
        />
        <path
            fill="currentColor"
            d="M9.854 12.146a.5.5 0 0 0-.708.708l.708-.708ZM12 15l-.354.354.354.353.354-.353L12 15Zm2.854-2.146a.5.5 0 0 0 0-.708.5.5 0 0 0-.708 0l.708.708ZM12.5 5a.5.5 0 0 0-1 0h1Zm-3.354 7.854 2.5 2.5.708-.708-2.5-2.5-.708.708Zm3.208 2.5 2.5-2.5-.708-.708-2.5 2.5.708.708ZM12.5 15V5h-1v10h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadCircleDuotone",
} as DefineComponent;
</script>
