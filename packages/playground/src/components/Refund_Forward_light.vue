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
            d="m20 8 .354.354.353-.354-.353-.354L20 8Zm-5 11.5a.5.5 0 0 0 0-1v1Zm.354-6.146 5-5-.708-.708-5 5 .708.708Zm5-5.708-5-5-.708.707 5 5 .708-.706ZM20 7.5H9.5v1H20v-1Zm-10.5 12H15v-1H9.5v1Zm-6-6a6 6 0 0 0 6 6v-1a5 5 0 0 1-5-5h-1Zm6-6a6 6 0 0 0-6 6h1a5 5 0 0 1 5-5v-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refundForwardLight",
} as DefineComponent;
</script>
