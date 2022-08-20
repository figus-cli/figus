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
            d="m18 12 .354.354.353-.354-.353-.354L18 12Zm-5.646 6.354 6-6-.708-.708-6 6 .708.708Zm6-6.708-6-6-.708.708 6 6 .708-.708ZM12 12l.354.354.353-.354-.353-.354L12 12Zm-5.646 6.354 6-6-.708-.708-6 6 .708.708Zm6-6.708-6-6-.708.708 6 6 .708-.708Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandRightDoubleLight",
} as DefineComponent;
</script>
