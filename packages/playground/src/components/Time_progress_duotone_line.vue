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
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M12 4v2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="M12 12 6.059 6.066"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M20 12h-2m-6 6v2m-6-8H4"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="M12 3.6a8.4 8.4 0 1 1-5.94 2.46"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeProgressDuotoneLine",
} as DefineComponent;
</script>
