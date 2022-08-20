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
            fill-rule="evenodd"
            d="M5.307 16.382a8 8 0 0 0 9.757 3.008 8 8 0 0 0 4.933-7.18 8 8 0 0 0-4.55-7.43 8 8 0 0 0-2.999-.767l.555 2.072a6 6 0 0 1 4.114 2.781 6 6 0 0 1-9.738 6.96l-2.072.556Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5.912 4.066A10 10 0 0 1 8.46 2.647c.42-.158.63-.238.827-.137.197.102.26.333.384.797l2.07 7.727c.122.455.183.683.08.862-.104.18-.332.24-.787.363l-7.727 2.07c-.464.124-.695.187-.882.066-.186-.12-.222-.342-.294-.784a10 10 0 0 1 3.781-9.545Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pipe",
} as DefineComponent;
</script>
