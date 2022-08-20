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
            d="M19.5 12c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C18.107 8.5 17.404 8.5 16 8.5h-1.843c-.818 0-1.226 0-1.594-.152-.368-.153-.657-.442-1.235-1.02l-.656-.656c-.579-.578-.868-.867-1.235-1.02C9.069 5.5 8.66 5.5 7.843 5.5H7.5c-1.886 0-2.828 0-3.414.586C3.5 6.672 3.5 7.614 3.5 9.5v5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586H12"
        />
        <circle cx="16.5" cy="16.5" r="2.5" stroke="currentColor" />
        <path fill="none" stroke="currentColor" d="M19.5 19.5 21 21" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderSearchLight",
} as DefineComponent;
</script>
