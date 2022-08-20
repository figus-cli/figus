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
            d="m20 10 .707.707.707-.707-.707-.707L20 10ZM3 18a1 1 0 1 0 2 0H3Zm12.707-2.293 5-5-1.414-1.414-5 5 1.414 1.414Zm5-6.414-5-5-1.414 1.414 5 5 1.414-1.414ZM20 9H10v2h10V9ZM3 16v2h2v-2H3Zm7-7a7 7 0 0 0-7 7h2a5 5 0 0 1 5-5V9Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "return",
} as DefineComponent;
</script>
