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
            d="M3 4h18M5 4h14v11.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C17.48 19 16.92 19 15.8 19H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 17.48 5 16.92 5 15.8V4Zm7 11V9"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m9 12 2.894-2.894a.15.15 0 0 1 .212 0L15 12"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadList",
} as DefineComponent;
</script>
