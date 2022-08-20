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
            d="m2 8-.707-.707L.586 8l.707.707L2 8Zm19 1a1 1 0 1 0 0-2v2ZM5.293 3.293l-4 4 1.414 1.414 4-4-1.414-1.414Zm-4 5.414 4 4 1.414-1.414-4-4-1.414 1.414ZM2 9h19V7H2v2Zm20 7 .707-.707.707.707-.707.707L22 16Zm-9 1a1 1 0 1 1 0-2v2Zm5.707-5.707 4 4-1.414 1.414-4-4 1.414-1.414Zm4 5.414-4 4-1.414-1.414 4-4 1.414 1.414ZM22 17h-9v-2h9v2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "horizontalTopLeftMain",
} as DefineComponent;
</script>
