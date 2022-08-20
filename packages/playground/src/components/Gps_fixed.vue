<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="2" />
        <circle
            cx="12"
            cy="12"
            r="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 5V3m7 9h2m-9 9v-2m-9-7h2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "gpsFixed",
} as DefineComponent;
</script>
