<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="8" fill="currentColor" fill-opacity=".24" />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="m9.5 12 1.894 1.894a.15.15 0 0 0 .212 0L15.5 10"
        />
        <path
            stroke="currentColor"
            d="M19.5 12a7.5 7.5 0 0 1-12.803 5.303A7.5 7.5 0 0 1 7.833 5.764 7.5 7.5 0 0 1 12 4.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "checkRingRoundDuotone",
} as DefineComponent;
</script>
