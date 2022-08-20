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
            d="m18 12 .354-.354.353.354-.353.354L18 12Zm-12 .5a.5.5 0 0 1 0-1v1Zm8.354-4.854 4 4-.708.708-4-4 .708-.708Zm4 4.708-4 4-.708-.708 4-4 .708.708ZM18 12.5H6v-1h12v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowAltLrightAlt",
} as DefineComponent;
</script>
