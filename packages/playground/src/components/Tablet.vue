<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="14"
            height="18"
            x="5"
            y="3"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
        />
        <path fill="none" stroke="currentColor" stroke-width="2" d="M15 17H9" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tablet",
} as DefineComponent;
</script>
