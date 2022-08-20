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
            fill-rule="evenodd"
            d="M2.586 5.586C2 6.172 2 7.114 2 9v6c0 1.886 0 2.828.586 3.414C3.172 19 4.114 19 6 19h12c1.886 0 2.828 0 3.414-.586C22 17.828 22 16.886 22 15V9c0-1.886 0-2.828-.586-3.414C20.828 5 19.886 5 18 5H6c-1.886 0-2.828 0-3.414.586ZM5 7a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H5Zm11 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Zm-3-4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "moneyFill",
} as DefineComponent;
</script>
