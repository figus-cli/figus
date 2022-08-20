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
            d="m14 10-4 4"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m16 13 2-2a3.536 3.536 0 0 0-5-5l-2 2m-3 3-2 2a3.536 3.536 0 0 0 5 5l2-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "linkAlt",
} as DefineComponent;
</script>
