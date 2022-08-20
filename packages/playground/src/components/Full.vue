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
            d="M4 5V4H3v1h1Zm7.293 8.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM5 11V5H3v6h2ZM4 6h6V4H4v2Zm-.707-.293 8 8 1.414-1.414-8-8-1.414 1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M21 13h-5c-1.886 0-2.828 0-3.414.586C12 14.172 12 15.114 12 17v2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "full",
} as DefineComponent;
</script>
