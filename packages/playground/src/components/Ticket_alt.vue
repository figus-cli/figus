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
            d="M18 21V3l-3 2-3-2-3 2-3-2v18l3-1.5 3 1.5 3-1.5 3 1.5Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M10 9h4m-4 6h4m-4-3h4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ticketAlt",
} as DefineComponent;
</script>
