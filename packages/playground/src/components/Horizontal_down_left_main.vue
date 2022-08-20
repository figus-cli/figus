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
            d="m22 8 .707-.707.707.707-.707.707L22 8ZM12 9a1 1 0 1 1 0-2v2Zm6.707-5.707 4 4-1.414 1.414-4-4 1.414-1.414Zm4 5.414-4 4-1.414-1.414 4-4 1.414 1.414ZM22 9H12V7h10v2ZM2 16l-.707-.707L.586 16l.707.707L2 16Zm19 1a1 1 0 1 0 0-2v2ZM5.293 11.293l-4 4 1.414 1.414 4-4-1.414-1.414Zm-4 5.414 4 4 1.414-1.414-4-4-1.414 1.414ZM2 17h19v-2H2v2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "horizontalDownLeftMain",
} as DefineComponent;
</script>
