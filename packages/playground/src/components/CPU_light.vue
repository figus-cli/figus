<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            d="M7 11c0-1.886 0-2.828.586-3.414C8.172 7 9.114 7 11 7h2c1.886 0 2.828 0 3.414.586C17 8.172 17 9.114 17 11v2c0 1.886 0 2.828-.586 3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414-.586C7 15.828 7 14.886 7 13v-2Z"
        />
        <rect width="4" height="4" x="10" y="10" fill="currentColor" rx="1" />
        <path
            stroke="currentColor"
            d="M10 7V4m4 3V4m3 6h3m-3 4h3m-10 6v-3m4 3v-3M4 10h3m-3 4h3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cpuLight",
} as DefineComponent;
</script>
