<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" fill="currentColor" fill-opacity=".24" />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="m9 10 3.258 2.444a1 1 0 0 0 1.353-.142L20 5"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M21 12a9 9 0 0 1-6.107 8.522A9 9 0 0 1 4.86 17.48a9 9 0 0 1 9.47-14.172"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneRingRoundDuotoneLine",
} as DefineComponent;
</script>
