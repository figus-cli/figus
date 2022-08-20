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
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M6 21h12a3 3 0 1 0 0-6c-.28 0-.42 0-.517-.02-.298-.06-.44-.151-.616-.399-.058-.08-.14-.262-.303-.626a5.001 5.001 0 0 0-9.128 0c-.163.364-.245.545-.303.626-.176.248-.318.34-.616.4C6.419 15 6.279 15 6 15a3 3 0 1 0 0 6Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M9.854 7.854a.5.5 0 1 1-.708-.708l.708.708ZM12 5l-.354-.354.354-.353.354.353L12 5Zm2.854 2.146a.5.5 0 0 1-.708.708l.708-.708ZM12.5 15a.5.5 0 0 1-1 0h1ZM9.146 7.146l2.5-2.5.708.708-2.5 2.5-.708-.708Zm3.208-2.5 2.5 2.5-.708.708-2.5-2.5.708-.708ZM12.5 5v10h-1V5h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "downloadDuotone",
} as DefineComponent;
</script>
