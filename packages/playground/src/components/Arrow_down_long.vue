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
            d="M13 17a1 1 0 1 1-2 0h2ZM11 3a1 1 0 1 1 2 0h-2Zm0 14V3h2v14h-2Z"
        />
        <path
            fill="currentColor"
            d="m12.203 21.715 3.893-5.45a.8.8 0 0 0-.65-1.265H8.554a.8.8 0 0 0-.651 1.265l3.893 5.45a.25.25 0 0 0 .406 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowDownLong",
} as DefineComponent;
</script>
