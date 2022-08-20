<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M13.325 15.076A11.513 11.513 0 0 0 12 15c-1.981 0-3.907.508-5.479 1.446-1.22.729-2.174 1.685-2.78 2.772-.275.494.055 1.072.607 1.187A37.505 37.505 0 0 0 15 21.074V21h-1a3 3 0 0 1-.675-5.924Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="2.5" d="M18 14v8m4-4h-8" />
        <circle cx="12" cy="8" r="5" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userFillAdd",
} as DefineComponent;
</script>
