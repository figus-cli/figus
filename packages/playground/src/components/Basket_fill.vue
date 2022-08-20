<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" stroke-width="2" d="M8 5 6 9m10-4 2 4" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M21 10h-1.198a1 1 0 0 0-.976.783l-1.478 6.65A2 2 0 0 1 15.396 19H8.604a2 2 0 0 1-1.952-1.566l-1.478-6.65A1 1 0 0 0 4.198 10H3a1 1 0 1 1 0-2h18a1 1 0 1 1 0 2Zm-10 2a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "basketFill",
} as DefineComponent;
</script>
