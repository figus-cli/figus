<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M12 5V3m0 18v-2m4.95-11.95 1.414-1.414M5.636 18.364 7.05 16.95M19 12h2M3 12h2m11.95 4.95 1.414 1.414M5.636 5.636 7.05 7.05"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sun",
} as DefineComponent;
</script>
