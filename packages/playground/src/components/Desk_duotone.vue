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
            fill-rule="evenodd"
            d="M8 5.309c0-.144 0-.216-.045-.26-.046-.044-.117-.042-.26-.038-1.053.03-1.678.143-2.11.575C5 6.172 5 7.114 5 9v7c0 1.886 0 2.828.586 3.414C6.172 20 7.114 20 9 20h6c1.886 0 2.828 0 3.414-.586C19 18.828 19 17.886 19 16V9c0-1.886 0-2.828-.586-3.414-.431-.432-1.056-.545-2.11-.575-.142-.004-.213-.006-.258.038-.046.044-.046.116-.046.26V6.5a1.5 1.5 0 0 1-3 0V5.3c0-.141 0-.212-.044-.256C12.912 5 12.841 5 12.7 5h-1.4c-.141 0-.212 0-.256.044C11 5.088 11 5.159 11 5.3v1.2a1.5 1.5 0 0 1-3 0V5.309Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M9.5 3.5v3m5-3v3m-5 4h5m-5 3h5m-5 3h5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "deskDuotone",
} as DefineComponent;
</script>
