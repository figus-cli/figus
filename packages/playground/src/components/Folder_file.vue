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
            d="M4 13c0-1.886 0-2.828.586-3.414C5.172 9 6.114 9 8 9h.343c.818 0 1.226 0 1.594.152.368.153.657.442 1.235 1.02l.656.656c.579.579.868.868 1.235 1.02.368.152.776.152 1.594.152H16c1.886 0 2.828 0 3.414.586C20 13.172 20 14.114 20 16c0 1.886 0 2.828-.586 3.414C18.828 20 17.886 20 16 20H8c-1.886 0-2.828 0-3.414-.586C4 18.828 4 17.886 4 16v-3Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M18 12V8c0-1.886 0-2.828-.586-3.414C16.828 4 15.886 4 14 4h-4c-1.886 0-2.828 0-3.414.586C6 5.172 6 6.114 6 8v1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderFile",
} as DefineComponent;
</script>
