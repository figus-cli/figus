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
        <path stroke="currentColor" d="M5.938 15.5a7 7 0 1 1 5.01 3.42" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refreshLight",
} as DefineComponent;
</script>
