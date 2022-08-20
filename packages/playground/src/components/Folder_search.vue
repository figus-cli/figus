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
            d="M20 12c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8h-1.343c-.818 0-1.226 0-1.594-.152-.368-.152-.657-.441-1.235-1.02l-.656-.656c-.579-.578-.868-.867-1.235-1.02C9.569 5 9.16 5 8.343 5H8c-1.886 0-2.828 0-3.414.586C4 6.172 4 7.114 4 9v6c0 1.886 0 2.828.586 3.414C5.172 19 6.114 19 8 19h3"
        />
        <circle
            cx="16.5"
            cy="16.5"
            r="2.5"
            stroke="currentColor"
            stroke-width="2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M19.5 19.5 21 21"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderSearch",
} as DefineComponent;
</script>
