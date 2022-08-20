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
            stroke="currentColor"
            d="m7.558 20.378 4.397-9.283a.05.05 0 0 1 .09 0l4.397 9.283a.05.05 0 0 1-.065.067L12.02 18.51a.05.05 0 0 0-.04 0l-4.357 1.936a.05.05 0 0 1-.065-.067Z"
        />
        <path fill="currentColor" d="M11.5 11.5v7h1v-7h-1Z" />
        <path
            stroke="currentColor"
            stroke-opacity=".24"
            d="M10.5 8.5V3.68c0-.05.067-.069.093-.025l2.814 4.69c.026.044.093.025.093-.026V3.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "compassNorthDuotone",
} as DefineComponent;
</script>
