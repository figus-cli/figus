<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="11"
            cy="11"
            r="6"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <path stroke="currentColor" stroke-width="1.2" d="m20 20-3-3" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "searchDuotoneLine",
} as DefineComponent;
</script>
