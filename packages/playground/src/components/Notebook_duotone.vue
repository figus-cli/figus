<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" d="M3.5 7.5h4m-4 8h4m-4-4h4" />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M5.01 5.695c-.003.143-.005.214.039.26.044.045.116.045.26.045H7.5a1.5 1.5 0 0 1 0 3H5.3c-.141 0-.212 0-.256.044C5 9.088 5 9.158 5 9.3v.4c0 .141 0 .212.044.256.044.044.115.044.256.044h2.2a1.5 1.5 0 0 1 0 3H5.3c-.141 0-.212 0-.256.044C5 13.088 5 13.159 5 13.3v.4c0 .141 0 .212.044.256.044.044.115.044.256.044h2.2a1.5 1.5 0 0 1 0 3H5.3c-.141 0-.212 0-.256.044-.044.044-.044.115-.044.257.002 1.687.032 2.56.586 3.113C6.172 21 7.114 21 9 21h6c1.886 0 2.828 0 3.414-.586C19 19.828 19 18.886 19 17V7c0-1.886 0-2.828-.586-3.414C17.828 3 16.886 3 15 3H9c-1.886 0-2.828 0-3.414.586-.432.431-.545 1.056-.575 2.11Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M15.5 10.5v-3" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "notebookDuotone",
} as DefineComponent;
</script>
