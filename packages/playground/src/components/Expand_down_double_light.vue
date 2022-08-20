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
            d="m12 18 .354.354-.354.353-.354-.353L12 18Zm6.354-5.646-6 6-.708-.708 6-6 .708.708Zm-6.708 6-6-6 .708-.708 6 6-.708.708ZM12 12l.354.354-.354.353-.354-.353L12 12Zm6.354-5.646-6 6-.708-.708 6-6 .708.708Zm-6.708 6-6-6 .708-.708 6 6-.708.708Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandDownDoubleLight",
} as DefineComponent;
</script>
