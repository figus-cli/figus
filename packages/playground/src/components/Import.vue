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
            d="m12 14-.707.707.707.707.707-.707L12 14Zm1-9a1 1 0 1 0-2 0h2ZM6.293 9.707l5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM13 14V5h-2v9h2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "import",
} as DefineComponent;
</script>
