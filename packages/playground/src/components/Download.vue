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
            d="m12 16-.707.707.707.707.707-.707L12 16Zm1-12a1 1 0 1 0-2 0h2Zm-7.707 6.707 6 6 1.414-1.414-6-6-1.414 1.414Zm7.414 6 6-6-1.414-1.414-6 6 1.414 1.414ZM13 16V4h-2v12h2Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M5 21h14" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "download",
} as DefineComponent;
</script>
