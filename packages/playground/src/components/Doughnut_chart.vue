<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M12 3v4.5M18 18l-3-3m3-9-3 3M3 12h4.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doughnutChart",
} as DefineComponent;
</script>
