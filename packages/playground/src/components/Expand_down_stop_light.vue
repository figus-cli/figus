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
            d="m12 13-.354.354.354.353.354-.353L12 13ZM5.646 7.354l6 6 .708-.708-6-6-.708.708Zm6.708 6 6-6-.708-.708-6 6 .708.708Z"
        />
        <path stroke="currentColor" d="M17 18H7" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandDownStopLight",
} as DefineComponent;
</script>
