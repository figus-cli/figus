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
            d="M10 16v-1M8 4 6 7m10-3 2 3m-4 9v-1m-9-4c.57 0 1.048.428 1.11.994l.495 4.448c.188 1.692.282 2.539.851 3.048.57.51 1.421.51 3.124.51h2.84c1.703 0 2.554 0 3.124-.51.57-.51.663-1.356.851-3.048l.495-4.448A1.117 1.117 0 0 1 19 11m0 0H5a2 2 0 1 1 0-4h14a2 2 0 1 1 0 4Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "basketAlt",
} as DefineComponent;
</script>
