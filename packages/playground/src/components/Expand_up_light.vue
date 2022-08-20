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
            d="m12 9 .354-.354L12 8.293l-.354.354L12 9Zm6.354 5.646-6-6-.708.708 6 6 .708-.708Zm-6.708-6-6 6 .708.708 6-6-.708-.708Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandUpLight",
} as DefineComponent;
</script>
