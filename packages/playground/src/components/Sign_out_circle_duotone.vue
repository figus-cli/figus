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
            transform="matrix(0 -1 -1 0 15 12)"
            r="7"
        />
        <path
            fill="currentColor"
            d="M6.854 9.854a.5.5 0 1 0-.708-.708l.708.708ZM4 12l-.353-.354-.354.354.353.354L4 12Zm2.146 2.854a.5.5 0 0 0 .708-.708l-.708.708ZM14 12.5a.5.5 0 0 0 0-1v1ZM6.146 9.146l-2.5 2.5.708.708 2.5-2.5-.708-.708Zm-2.5 3.208 2.5 2.5.708-.708-2.5-2.5-.707.708ZM4 12.5h10v-1H4v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOutCircleDuotone",
} as DefineComponent;
</script>
