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
            d="M4 13.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C5.52 10 6.08 10 7.2 10h1.474c.49 0 .734 0 .965.055.204.05.399.13.578.24.201.123.374.296.72.642l1.126 1.126c.346.346.519.519.72.642a2.003 2.003 0 0 0 .579.24c.23.055.474.055.963.055H16.8c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C20 14.52 20 15.08 20 16.2v1.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 21 17.92 21 16.8 21H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 19.48 4 18.92 4 17.8v-4.6Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M18 13V7l-3-3H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 5.52 6 6.08 6 7.2V10"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 4v3.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C13.76 9 14.04 9 14.6 9H18"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderFileAlt",
} as DefineComponent;
</script>
