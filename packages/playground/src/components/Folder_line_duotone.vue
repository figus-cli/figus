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
            d="M3 7h16a2 2 0 0 1 2 2H3V7Z"
        />
        <path
            fill="currentColor"
            d="M3 10h18v4.2c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 19 17.88 19 16.2 19H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 16.72 3 15.88 3 14.2V10Z"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            d="M3 7c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 4 5.068 4 6 4h2.343c.818 0 1.226 0 1.594.152.368.152.657.441 1.235 1.02L13 7H3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderLineDuotone",
} as DefineComponent;
</script>
