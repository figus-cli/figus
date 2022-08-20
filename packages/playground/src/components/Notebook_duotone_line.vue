<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="13"
            height="17"
            x="6"
            y="4"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M15 10V8M4 9h4m-4 4h4m-4 4h4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "notebookDuotoneLine",
} as DefineComponent;
</script>
