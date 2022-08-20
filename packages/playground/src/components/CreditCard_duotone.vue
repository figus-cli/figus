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
            d="M3 10c0-1.886 0-2.828.586-3.414C4.172 6 5.114 6 7 6h10c1.886 0 2.828 0 3.414.586C21 7.172 21 8.114 21 10v4c0 1.886 0 2.828-.586 3.414C19.828 18 18.886 18 17 18H7c-1.886 0-2.828 0-3.414-.586C3 16.828 3 15.886 3 14v-4Z"
        />
        <circle cx="6" cy="15" r="1" fill="currentColor" />
        <path fill="currentColor" d="M3 9h18v2H3z" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "creditCardDuotone",
} as DefineComponent;
</script>
