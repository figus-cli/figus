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
            d="m20 12 .354-.354.353.354-.353.354L20 12Zm-15 .5a.5.5 0 0 1 0-1v1Zm9.354-6.854 6 6-.708.708-6-6 .708-.708Zm6 6.708-6 6-.708-.708 6-6 .708.708ZM20 12.5H5v-1h15v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowRightLight",
} as DefineComponent;
</script>
