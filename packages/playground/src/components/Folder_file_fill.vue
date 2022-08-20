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
            d="M6 7c0-1.886 0-2.828.586-3.414C7.172 3 8.114 3 10 3h4c1.886 0 2.828 0 3.414.586C18 4.172 18 5.114 18 7v2c0 1.886 0 2.828-.586 3.414C16.828 13 15.886 13 14 13h-4c-1.886 0-2.828 0-3.414-.586C6 11.828 6 10.886 6 9V7Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5 8h5.172a2 2 0 0 1 1.414.586l1.828 1.828a2 2 0 0 0 1.414.586H21.5"
        />
        <path
            fill="currentColor"
            d="M3 12h14.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C21 13.52 21 14.08 21 15.2v2.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C19.48 21 18.92 21 17.8 21H6.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C3 19.48 3 18.92 3 17.8V12Zm0 0c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C4.602 9 5.068 9 6 9h2.343c.818 0 1.226 0 1.594.152.368.153.657.442 1.235 1.02L13 12H3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderFileFill",
} as DefineComponent;
</script>
