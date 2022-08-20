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
            stroke-linejoin="round"
            stroke-width="2"
            d="M8 3v1c0 1.886 0 2.828-.586 3.414C6.828 8 5.886 8 4 8H3m13-5v1c0 1.886 0 2.828.586 3.414C17.172 8 18.114 8 20 8h1M8 21v-1c0-1.886 0-2.828-.586-3.414C6.828 16 5.886 16 4 16H3m13 5v-1c0-1.886 0-2.828.586-3.414C17.172 16 18.114 16 20 16h1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "frame",
} as DefineComponent;
</script>
