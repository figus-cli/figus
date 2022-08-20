<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="18"
            height="15"
            x="3"
            y="6"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
        />
        <path
            fill="currentColor"
            d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10H3Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M7 3v3m10-3v3" />
        <rect width="4" height="2" x="7" y="12" fill="currentColor" rx=".5" />
        <rect width="4" height="2" x="7" y="16" fill="currentColor" rx=".5" />
        <rect width="4" height="2" x="13" y="12" fill="currentColor" rx=".5" />
        <rect width="4" height="2" x="13" y="16" fill="currentColor" rx=".5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "dateRange",
} as DefineComponent;
</script>
