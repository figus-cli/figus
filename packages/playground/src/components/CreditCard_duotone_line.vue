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
            d="M3 11h18v4c0 1.886 0 2.828-.586 3.414C19.828 19 18.886 19 17 19H7c-1.886 0-2.828 0-3.414-.586C3 17.828 3 16.886 3 15v-4Z"
        />
        <rect
            width="18"
            height="13"
            x="3"
            y="6"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M7 15h.01M3 11h18" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "creditCardDuotoneLine",
} as DefineComponent;
</script>
