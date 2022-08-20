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
            d="M4 9c0-1.886 0-2.828.586-3.414C5.172 5 6.114 5 8 5h.343c.818 0 1.226 0 1.594.152.368.152.657.441 1.235 1.02l.656.656c.579.578.868.867 1.235 1.02.368.152.776.152 1.594.152H16c1.886 0 2.828 0 3.414.586C20 9.172 20 10.114 20 12v3c0 1.886 0 2.828-.586 3.414C18.828 19 17.886 19 16 19H8c-1.886 0-2.828 0-3.414-.586C4 17.828 4 16.886 4 15V9Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folder",
} as DefineComponent;
</script>
