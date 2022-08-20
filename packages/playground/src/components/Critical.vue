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
            stroke-width="2"
            d="M21 16a9 9 0 0 0-9-9 9 9 0 0 0-9 9h5.005a3.995 3.995 0 0 1 6.82-2.825A3.995 3.995 0 0 1 15.995 16H21Zm-9-9v5m6.364-2.364-3 3m-9.728-3L9 13"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "critical",
} as DefineComponent;
</script>
