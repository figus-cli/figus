<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="14" height="14" x="5" y="5" fill="currentColor" rx="2" />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M9 6V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6c1.864 0 2.796 0 3.53.304a4 4 0 0 1 2.165 2.165C21 6.204 21 7.136 21 9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "itoFill",
} as DefineComponent;
</script>
