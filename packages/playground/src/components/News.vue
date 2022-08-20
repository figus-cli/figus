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
            height="14"
            x="5"
            y="5"
            stroke="currentColor"
            stroke-width="2"
            rx="3"
        />
        <path fill="none" stroke="currentColor" stroke-width="2" d="M6 10h12" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "news",
} as DefineComponent;
</script>
