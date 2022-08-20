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
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "checkRingDuotone",
} as DefineComponent;
</script>
