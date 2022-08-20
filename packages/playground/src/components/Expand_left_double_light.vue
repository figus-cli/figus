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
            d="m6 12-.354.354L5.293 12l.353-.354L6 12Zm5.646 6.354-6-6 .708-.708 6 6-.708.708Zm-6-6.708 6-6 .708.708-6 6-.708-.708ZM12 12l-.354.354-.353-.354.353-.354L12 12Zm5.646 6.354-6-6 .708-.708 6 6-.708.708Zm-6-6.708 6-6 .708.708-6 6-.708-.708Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandLeftDoubleLight",
} as DefineComponent;
</script>
