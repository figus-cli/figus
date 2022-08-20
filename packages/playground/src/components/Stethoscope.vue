<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="19" cy="14" r="2" fill="currentColor" />
        <circle cx="9" cy="13" r="2" fill="currentColor" />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M19 14v2a5 5 0 0 1-5 5h-2c-2.5 0-3-1.6-3-8m0-1c3.959 0 4.98-2.938 5-5.907a.149.149 0 0 0-.083-.135L12 5m-3 7c-3.959 0-4.979-2.938-5-5.907a.149.149 0 0 1 .083-.135L6 5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "stethoscope",
} as DefineComponent;
</script>
