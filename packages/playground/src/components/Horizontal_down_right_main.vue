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
            d="m2 8-.707-.707L.586 8l.707.707L2 8Zm10 1a1 1 0 1 0 0-2v2ZM5.293 3.293l-4 4 1.414 1.414 4-4-1.414-1.414Zm-4 5.414 4 4 1.414-1.414-4-4-1.414 1.414ZM2 9h10V7H2v2Zm20 7 .707-.707.707.707-.707.707L22 16ZM3 17a1 1 0 1 1 0-2v2Zm15.707-5.707 4 4-1.414 1.414-4-4 1.414-1.414Zm4 5.414-4 4-1.414-1.414 4-4 1.414 1.414ZM22 17H3v-2h19v2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "horizontalDownRightMain",
} as DefineComponent;
</script>
