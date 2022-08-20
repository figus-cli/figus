<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".24" />
        <path stroke="currentColor" stroke-width="1.2" d="m9 9 6 6m0-6-6 6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "closeRingDuotone",
} as DefineComponent;
</script>
