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
            d="m14 16 .707-.707.707.707-.707.707L14 16Zm-3.293-4.707 4 4-1.414 1.414-4-4 1.414-1.414Zm4 5.414-4 4-1.414-1.414 4-4 1.414 1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M20 13.5V10a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxRefreshRight",
} as DefineComponent;
</script>
