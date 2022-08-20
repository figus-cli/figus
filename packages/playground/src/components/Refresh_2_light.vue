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
            d="m10 19-.354-.354-.353.354.354.354L10 19Zm3.646-4.354-4 4 .708.708 4-4-.708-.708Zm-4 4.708 4 4 .708-.708-4-4-.708.708Z"
        />
        <path
            stroke="currentColor"
            d="M18.062 8.5a7 7 0 0 1-3.147 9.864 7.001 7.001 0 0 1-3.79.581"
        />
        <path
            fill="currentColor"
            d="m14 5 .354.354.353-.354-.353-.354L14 5Zm-3.646 4.354 4-4-.708-.708-4 4 .708.708Zm4-4.708-4-4-.708.708 4 4 .708-.708Z"
        />
        <path stroke="currentColor" d="M5.938 15.5a7 7 0 0 1 7.158-10.414" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refresh_2Light",
} as DefineComponent;
</script>
