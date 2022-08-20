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
            d="M5.817 16.245a7.499 7.499 0 0 0 4.82 3.13 7.5 7.5 0 1 0 1.948-14.852l.277 1.035a6.5 6.5 0 0 1 4.68 3.047 6.5 6.5 0 0 1-6.724 9.787 6.5 6.5 0 0 1-3.966-2.424l-1.035.277Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            d="M5.912 4.066A10 10 0 0 1 8.46 2.647c.42-.158.63-.238.827-.137.197.102.26.333.384.797l2.07 7.727c.122.455.183.683.08.862-.104.18-.332.24-.787.363l-7.727 2.07c-.464.124-.695.187-.882.066-.186-.12-.222-.342-.294-.784a10 10 0 0 1 3.781-9.545Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pipeLight",
} as DefineComponent;
</script>
