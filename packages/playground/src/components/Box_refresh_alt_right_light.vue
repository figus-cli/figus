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
            d="m16 16 .354-.354.353.354-.353.354L16 16Zm-3.646-4.354 4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708Z"
        />
        <path stroke="currentColor" d="M13 8h4m-1 8H8a4 4 0 0 1 0-8h1" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxRefreshAltRightLight",
} as DefineComponent;
</script>
