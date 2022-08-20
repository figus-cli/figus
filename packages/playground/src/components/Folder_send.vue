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
            d="M5 12V9c0-1.886 0-2.828.586-3.414C6.172 5 7.114 5 9 5h.343c.818 0 1.226 0 1.594.152.368.152.657.441 1.235 1.02l.656.656c.579.578.868.867 1.235 1.02.368.152.776.152 1.594.152H17c1.886 0 2.828 0 3.414.586C21 9.172 21 10.114 21 12v3c0 1.886 0 2.828-.586 3.414C19.828 19 18.886 19 17 19h-1M4 16.5h9m0 0L9.5 13m3.5 3.5L9.5 20"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderSend",
} as DefineComponent;
</script>
