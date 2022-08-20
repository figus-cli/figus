<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="currentColor" d="M17 18a5 5 0 0 0-5-5 5 5 0 0 0-5 5h10Z" />
        <path stroke="currentColor" stroke-width="2" d="m17.5 12.5 2-2" />
        <path stroke="currentColor" stroke-width="2" d="M5 18h14" />
        <path stroke="currentColor" stroke-width="2" d="m4.5 10.5 2 2" />
        <path
            fill="currentColor"
            d="m12 2 .707-.707L12 .586l-.707.707L12 2Zm-1 8.5a1 1 0 1 0 2 0h-2Zm4.707-6.207-3-3-1.414 1.414 3 3 1.414-1.414Zm-4.414-3-3 3 1.414 1.414 3-3-1.414-1.414ZM11 2v8.5h2V2h-2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sunFill",
} as DefineComponent;
</script>
