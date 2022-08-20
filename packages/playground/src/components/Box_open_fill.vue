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
            d="M5 11h14v4c0 1.886 0 2.828-.586 3.414C17.828 19 16.886 19 15 19H9c-1.886 0-2.828 0-3.414-.586C5 17.828 5 16.886 5 15v-4ZM2.815 7.815 5 10l4-4-2.411-1.607a1 1 0 0 0-1.155.032L2.922 6.308a1 1 0 0 0-.107 1.507Zm18.37 0L19 10l-4-4 2.411-1.607a1 1 0 0 1 1.155.032l2.512 1.883a1 1 0 0 1 .107 1.507Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M18 10v1H6v-1l3-3h6l3 3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxOpenFill",
} as DefineComponent;
</script>
