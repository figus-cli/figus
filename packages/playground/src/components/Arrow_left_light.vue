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
            d="m4 12-.353-.354-.354.354.353.354L4 12Zm15 .5a.5.5 0 0 0 0-1v1ZM9.646 5.646l-6 6 .708.708 6-6-.708-.708Zm-6 6.708 6 6 .708-.708-6-6-.707.708ZM4 12.5h15v-1H4v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowLeftLight",
} as DefineComponent;
</script>
