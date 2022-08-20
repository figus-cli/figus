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
            d="m5 12-.354-.354-.353.354.353.354L5 12Zm12 .5a.5.5 0 0 0 0-1v1ZM8.646 7.646l-4 4 .708.708 4-4-.708-.708Zm-4 4.708 4 4 .708-.708-4-4-.708.708ZM5 12.5h12v-1H5v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowAltLeftAlt",
} as DefineComponent;
</script>
