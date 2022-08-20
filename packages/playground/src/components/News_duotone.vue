<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            fill-opacity=".24"
            d="M5 10c0-1.87 0-2.804.402-3.5A3 3 0 0 1 6.5 5.402C7.196 5 8.13 5 10 5h4c1.87 0 2.804 0 3.5.402A3 3 0 0 1 18.598 6.5C19 7.196 19 8.13 19 10H5Z"
        />
        <rect
            width="14"
            height="14"
            x="5"
            y="5"
            stroke="currentColor"
            stroke-width="1.2"
            rx="3"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M5 10h14" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "newsDuotone",
} as DefineComponent;
</script>
