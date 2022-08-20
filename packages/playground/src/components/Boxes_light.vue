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
            d="M6.5 6.3a1.8 1.8 0 0 1 1.8-1.8h6.4a1.8 1.8 0 0 1 1.8 1.8v5.2H8.3a1.8 1.8 0 0 1-1.8-1.8V6.3Zm-2 7a1.8 1.8 0 0 1 1.8-1.8h6.2v8H6.3a1.8 1.8 0 0 1-1.8-1.8v-4.4Zm8-1.8h6.2a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8h-6.2v-8Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M16.5 11.5v3m-8-3v3m3-10v3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxesLight",
} as DefineComponent;
</script>
