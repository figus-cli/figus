<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="8" height="13" x="8" y="2" fill="currentColor" rx="4" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 11a7 7 0 0 0 11.95 4.95A7 7 0 0 0 19 11m-7 10v-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "micFill",
} as DefineComponent;
</script>
