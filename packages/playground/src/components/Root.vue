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
            d="m18.5 15.5-4-4m0 4 4-4M20 7h-6.902a.15.15 0 0 0-.138.089l-3.83 8.62a.15.15 0 0 1-.272.007L7.04 12.083A.15.15 0 0 0 6.907 12H6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "root",
} as DefineComponent;
</script>
