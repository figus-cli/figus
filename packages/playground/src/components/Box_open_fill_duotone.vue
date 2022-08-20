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
            d="M5 12h14v4c0 1.886 0 2.828-.586 3.414C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586C5 18.828 5 17.886 5 16v-4Z"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M2.815 7.815 5 10v1h14v-1l2.185-2.185a1 1 0 0 0-.107-1.507l-2.512-1.883a1 1 0 0 0-1.155-.032L15 6H9L6.589 4.393a1 1 0 0 0-1.155.032L2.922 6.308a1 1 0 0 0-.107 1.507ZM8.6 7.2h6.8l1.95 2.6H6.65L8.6 7.2Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxOpenFillDuotone",
} as DefineComponent;
</script>
