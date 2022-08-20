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
            d="M5.5 7A1.5 1.5 0 0 1 7 5.5h8A3.5 3.5 0 0 1 18.5 9v8a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 17V7ZM9 6V2m0 20v-4m6 4v-4m7-3h-4M6 15H2m4-6H2m13-6c1.864 0 2.796 0 3.53.304a4 4 0 0 1 2.165 2.165C21 6.204 21 7.136 21 9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "itoLight",
} as DefineComponent;
</script>
