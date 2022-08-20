<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4 5 7l7 3 7-3-7-3Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m7.026 10.044-2.42 1.037a1 1 0 0 0 0 1.838l7 3a1 1 0 0 0 .788 0l7-3a1 1 0 0 0 0-1.838l-2.42-1.037-2.538 1.088L16.46 12 12 13.912 7.539 12l2.025-.868-2.538-1.088Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m7.026 15.044-2.42 1.037a1 1 0 0 0 0 1.838l7 3a1 1 0 0 0 .788 0l7-3a1 1 0 0 0 0-1.838l-2.42-1.037-2.538 1.088L16.46 17 12 18.912 7.539 17l2.025-.868-2.538-1.088Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "layers",
} as DefineComponent;
</script>
