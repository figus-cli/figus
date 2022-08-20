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
            d="M21 20H3m7-4v-6a2 2 0 1 0-4 0v6m12 0V6a2 2 0 1 0-4 0v10"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "columUpLight",
} as DefineComponent;
</script>
