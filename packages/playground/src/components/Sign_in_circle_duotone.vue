<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            fill="currentColor"
            fill-opacity=".24"
            transform="matrix(0 -1 -1 0 13 12)"
            r="7"
        />
        <path
            fill="currentColor"
            d="M11.146 9.854a.5.5 0 0 1 .708-.708l-.708.708ZM14 12l.354-.354.353.354-.353.354L14 12Zm-2.146 2.854a.5.5 0 0 1-.708 0 .5.5 0 0 1 0-.708l.708.708ZM4 12.5a.5.5 0 0 1 0-1v1Zm7.854-3.354 2.5 2.5-.708.708-2.5-2.5.708-.708Zm2.5 3.208-2.5 2.5-.708-.708 2.5-2.5.708.708ZM14 12.5H4v-1h10v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signInCircleDuotone",
} as DefineComponent;
</script>
