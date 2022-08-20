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
            d="m8.5 11 2.293 2.293a1 1 0 0 0 1.414 0L19.5 6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneRoundDuotone",
} as DefineComponent;
</script>
