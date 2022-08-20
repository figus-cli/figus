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
            d="m10 12-.354-.354-.353.354.354.354L10 12Zm10 .5a.5.5 0 0 0 0-1v1Zm-4.354-6.854-6 6 .708.708 6-6-.708-.708Zm-6 6.708 6 6 .708-.708-6-6-.708.708ZM10 12.5h10v-1H10v1Z"
        />
        <path stroke="currentColor" d="M4 5v14" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowLeftStopLight",
} as DefineComponent;
</script>
