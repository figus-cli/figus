<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" />
        <ellipse
            cx="12"
            cy="12"
            stroke="currentColor"
            stroke-width="2"
            rx="3"
            ry="8"
        />
        <path fill="none" stroke="currentColor" stroke-width="2" d="M4 12h16" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "globe",
} as DefineComponent;
</script>
