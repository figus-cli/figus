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
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M19.5 14v-1.5c0-1.886 0-2.828-.586-3.414C18.328 8.5 17.386 8.5 15.5 8.5h-1.343c-.818 0-1.226 0-1.594-.152-.368-.153-.657-.442-1.235-1.02l-.656-.656c-.579-.578-.868-.867-1.235-1.02C9.069 5.5 8.66 5.5 7.843 5.5H7.5c-1.886 0-2.828 0-3.414.586C3.5 6.672 3.5 7.614 3.5 9.5v5c0 1.886 0 2.828.586 3.414.586.586 1.528.586 3.414.586H15"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="M17 18.5h2.5m0 0H22m-2.5 0V21m0-2.5V16"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderAddDuotoneLine",
} as DefineComponent;
</script>
