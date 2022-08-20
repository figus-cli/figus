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
            d="m12 20-.354.354.354.353.354-.353L12 20Zm.5-15a.5.5 0 0 0-1 0h1Zm-6.854 9.354 6 6 .708-.708-6-6-.708.708Zm6.708 6 6-6-.708-.708-6 6 .708.708ZM12.5 20V5h-1v15h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowDownLight",
} as DefineComponent;
</script>
