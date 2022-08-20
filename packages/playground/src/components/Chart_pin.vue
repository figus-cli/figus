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
            d="m15.5 10.5-3 3-2-2-3 3"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M14 5H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 6.52 4 7.08 4 8.2v8.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 20 6.08 20 7.2 20h8.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 18.48 19 17.92 19 16.8V10"
        />
        <circle cx="19" cy="5" r="2" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chartPin",
} as DefineComponent;
</script>
