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
            d="m8.5 11 2.894 2.894a.15.15 0 0 0 .212 0L19.5 6"
        />
        <path
            stroke="currentColor"
            d="M19.358 10.546a7.5 7.5 0 1 1-3.608-5.041"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneRingRoundDuotone",
} as DefineComponent;
</script>
