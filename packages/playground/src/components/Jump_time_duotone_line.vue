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
            stroke-width="1.2"
            d="m17.652 5.58-5.438 9.063a.25.25 0 0 1-.428 0L6.348 5.579a.25.25 0 0 1 .293-.365l5.28 1.76a.25.25 0 0 0 .158 0l5.28-1.76a.25.25 0 0 1 .293.365Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M4 19h5m6 0h5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "jumpTimeDuotoneLine",
} as DefineComponent;
</script>
