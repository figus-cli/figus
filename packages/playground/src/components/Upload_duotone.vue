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
            d="M6 13h12a3 3 0 1 0 0-6c-.28 0-.42 0-.517-.02-.298-.06-.44-.151-.616-.399-.058-.08-.14-.263-.303-.626a5.001 5.001 0 0 0-9.128 0c-.163.363-.245.545-.303.626-.176.248-.318.34-.616.4C6.419 7 6.279 7 6 7a3 3 0 1 0 0 6Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M9.854 11.854a.5.5 0 0 1-.708-.708l.708.708ZM12 9l-.354-.354.354-.353.354.354L12 9Zm2.854 2.146a.5.5 0 0 1 0 .708.5.5 0 0 1-.708 0l.708-.708ZM12.5 19a.5.5 0 0 1-1 0h1Zm-3.354-7.854 2.5-2.5.708.708-2.5 2.5-.708-.708Zm3.208-2.5 2.5 2.5-.708.708-2.5-2.5.708-.708ZM12.5 9v10h-1V9h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "uploadDuotone",
} as DefineComponent;
</script>
