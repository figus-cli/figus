<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" d="M9 13.5h2.5m0 0H14m-2.5 0V16m0-2.5V11" />
        <path
            stroke="currentColor"
            d="M7 5.5H6A1.5 1.5 0 0 0 4.5 7v1M7 19.5H6A1.5 1.5 0 0 1 4.5 18v-1M17 19.5h1a1.5 1.5 0 0 0 1.5-1.5v-1m0-6v-1A1.5 1.5 0 0 0 18 8.5h-1m-2 0h-.879a1.5 1.5 0 0 1-1.06-.44L12.5 7.5m-1-1-.56-.56a1.5 1.5 0 0 0-1.061-.44H9"
        />
        <path fill="currentColor" d="M19 13h1v2h-1z" />
        <path fill="currentColor" d="M4 13h1v2H4z" />
        <path fill="currentColor" d="M4 9h1v2H4z" />
        <path fill="currentColor" d="M13 19h2v1h-2z" />
        <path fill="currentColor" d="M9 19h2v1H9z" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderCreateLight",
} as DefineComponent;
</script>
