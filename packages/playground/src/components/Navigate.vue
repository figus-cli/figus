<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="m5 20 7-16 7 16-7-2-7 2Z"
        />
        <path
            fill="currentColor"
            d="m12 13-.581.814a1 1 0 0 0 1.162 0L12 13Zm-4.081-1.686 3.5 2.5 1.162-1.628-3.5-2.5-1.162 1.628Zm4.662 2.5 3.5-2.5-1.162-1.628-3.5 2.5 1.162 1.628Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "navigate",
} as DefineComponent;
</script>
