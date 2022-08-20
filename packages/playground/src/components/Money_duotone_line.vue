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
            d="M3.586 6.586C3 7.172 3 8.114 3 10v4c0 1.886 0 2.828.586 3.414C4.172 18 5.114 18 7 18h10c1.886 0 2.828 0 3.414-.586C21 16.828 21 15.886 21 14v-4c0-1.886 0-2.828-.586-3.414C19.828 6 18.886 6 17 6H7c-1.886 0-2.828 0-3.414.586ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clip-rule="evenodd"
        />
        <rect
            width="18"
            height="12"
            x="3"
            y="6"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M6 9h2m8 6h2" />
        <circle
            cx="12"
            cy="12"
            r="2.4"
            stroke="currentColor"
            stroke-width="1.2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "moneyDuotoneLine",
} as DefineComponent;
</script>
