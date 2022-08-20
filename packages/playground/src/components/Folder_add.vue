<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M19 14v-2c0-1.886 0-2.828-.586-3.414C17.828 8 16.886 8 15 8h-1.343c-.818 0-1.226 0-1.594-.152-.368-.152-.657-.441-1.235-1.02l-.656-.656c-.578-.578-.868-.867-1.235-1.02C8.569 5 8.16 5 7.343 5H7c-1.886 0-2.828 0-3.414.586C3 6.172 3 7.114 3 9v6c0 1.886 0 2.828.586 3.414C4.172 19 5.114 19 7 19h7m2 0h3m0 0h3m-3 0v3m0-3v-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderAdd",
} as DefineComponent;
</script>
