<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11.427 11.126 4.594 7.33A.4.4 0 0 0 4 7.68v8.64a.4.4 0 0 0 .594.35l6.833-3.796a1 1 0 0 0 0-1.748Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16 17V7m4 10V7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "stopAndPlay",
} as DefineComponent;
</script>
