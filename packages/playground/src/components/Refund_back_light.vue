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
            d="m4 8-.353.354L3.292 8l.353-.354L4 8Zm5 11.5a.5.5 0 0 1 0-1v1Zm-.354-6.146-5-5 .708-.708 5 5-.708.708Zm-5-5.708 5-5 .708.707-5 5-.707-.706ZM4 7.5h10.5v1H4v-1Zm10.5 12H9v-1h5.5v1Zm6-6a6 6 0 0 1-6 6v-1a5 5 0 0 0 5-5h1Zm-6-6a6 6 0 0 1 6 6h-1a5 5 0 0 0-5-5v-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refundBackLight",
} as DefineComponent;
</script>
