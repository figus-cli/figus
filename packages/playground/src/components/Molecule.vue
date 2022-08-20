<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="3" stroke="currentColor" stroke-width="2" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="m10 14-3 3m3.5-6.5L6 6"
        />
        <circle cx="18" cy="19" r="1" stroke="currentColor" stroke-width="2" />
        <path
            fill="currentColor"
            d="m13.22 14.625 4 5 1.56-1.25-4-5-1.56 1.25Z"
        />
        <circle cx="19" cy="5" r="2" stroke="currentColor" stroke-width="2" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="m17 7-3 3"
        />
        <circle cx="5.5" cy="5.5" r="2.5" fill="currentColor" />
        <circle
            cx="5.5"
            cy="18.5"
            r="2.5"
            stroke="currentColor"
            stroke-width="2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "molecule",
} as DefineComponent;
</script>
