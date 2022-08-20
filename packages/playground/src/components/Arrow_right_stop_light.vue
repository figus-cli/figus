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
            d="m14 12 .354-.354.353.354-.353.354L14 12Zm-10 .5a.5.5 0 0 1 0-1v1Zm4.354-6.854 6 6-.708.708-6-6 .708-.708Zm6 6.708-6 6-.708-.708 6-6 .708.708ZM14 12.5H4v-1h10v1Z"
        />
        <path stroke="currentColor" d="M20 5v14" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowRightStopLight",
} as DefineComponent;
</script>
