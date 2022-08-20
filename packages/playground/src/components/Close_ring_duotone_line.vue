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
            d="M12 20.4a8.4 8.4 0 0 1-5.94-2.46A8.4 8.4 0 0 1 3.6 12a8.4 8.4 0 1 1 8.4 8.4Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="m9 9 6 6m0-6-6 6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "closeRingDuotoneLine",
} as DefineComponent;
</script>
