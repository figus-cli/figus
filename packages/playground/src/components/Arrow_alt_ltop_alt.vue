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
            d="m12 6 .354-.354L12 5.293l-.354.353L12 6Zm-.5 12a.5.5 0 0 0 1 0h-1Zm4.854-8.354-4-4-.708.708 4 4 .708-.708Zm-4.708-4-4 4 .708.708 4-4-.708-.708ZM11.5 6v12h1V6h-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowAltLtopAlt",
} as DefineComponent;
</script>
