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
            stroke-width="2"
            d="M6 7a1 1 0 0 1 1-1h8a3 3 0 0 1 3 3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Zm3-1V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6a6 6 0 0 1 6 6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ito",
} as DefineComponent;
</script>
