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
            d="M7 6v8.592c0 1.719 2.024 2.637 3.317 1.506L11 15.5M4 9h6m4 0 5 8m0-8-5 8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "text",
} as DefineComponent;
</script>
