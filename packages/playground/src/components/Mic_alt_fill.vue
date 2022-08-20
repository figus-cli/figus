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
            d="M12 22v-3"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M6.083 8H9a1 1 0 1 1 0 2H6v2h3a1 1 0 1 1 0 2H6.083a6.002 6.002 0 0 0 11.834 0H16a1 1 0 1 1 0-2h2v-2h-2a1 1 0 1 1 0-2h1.917A6.002 6.002 0 0 0 6.083 8Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "micAltFill",
} as DefineComponent;
</script>
