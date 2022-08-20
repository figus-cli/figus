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
            d="m10 4 .354-.353L10 3.292l-.354.353L10 4Zm8 16.5a.5.5 0 0 0 0-1v1ZM15.354 8.646l-5-5-.708.708 5 5 .708-.708Zm-5.708-5-5 5 .708.708 5-5-.708-.707ZM9.5 4v10h1V4h-1ZM16 20.5h2v-1h-2v1ZM9.5 14a6.5 6.5 0 0 0 6.5 6.5v-1a5.5 5.5 0 0 1-5.5-5.5h-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "upLight",
} as DefineComponent;
</script>
