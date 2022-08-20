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
            d="m20 10 .354.354.353-.354-.353-.354L20 10ZM3.5 18a.5.5 0 0 0 1 0h-1Zm11.854-2.646 5-5-.708-.708-5 5 .708.708Zm5-5.708-5-5-.708.708 5 5 .708-.708ZM20 9.5H10v1h10v-1ZM3.5 16v2h1v-2h-1ZM10 9.5A6.5 6.5 0 0 0 3.5 16h1a5.5 5.5 0 0 1 5.5-5.5v-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "returnLight",
} as DefineComponent;
</script>
