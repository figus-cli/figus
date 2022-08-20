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
            d="M12 21a9 9 0 1 0-6.364-2.636"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m16 10-3.598 4.317c-.655.787-.983 1.18-1.424 1.2-.44.02-.802-.342-1.527-1.066L8 13"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "checkRingRound",
} as DefineComponent;
</script>
