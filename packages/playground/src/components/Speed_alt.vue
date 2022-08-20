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
            d="M6.343 17.657A8 8 0 0 1 7.555 5.348a8 8 0 0 1 12.291 8.213 8 8 0 0 1-2.19 4.096M12 12l4-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "speedAlt",
} as DefineComponent;
</script>
