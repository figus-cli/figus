<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="8"
            height="8"
            x="5"
            y="4"
            stroke="currentColor"
            stroke-width="2"
            rx="1.8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M4 13.8A1.8 1.8 0 0 1 5.8 12h4.4a1.8 1.8 0 0 1 1.8 1.8V20H5.8A1.8 1.8 0 0 1 4 18.2v-4.4Zm8 0a1.8 1.8 0 0 1 1.8-1.8h4.4a1.8 1.8 0 0 1 1.8 1.8v4.4a1.8 1.8 0 0 1-1.8 1.8H12v-6.2Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16 12v3m-8-3v3M9 4v3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxes",
} as DefineComponent;
</script>
