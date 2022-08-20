<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="2" />
        <circle
            cx="12"
            cy="12"
            r="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M7.05 7.05 4 4m12.95 3.05L20 4m0 16-3.05-3.05M4 20l3.05-3.05"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "target",
} as DefineComponent;
</script>
