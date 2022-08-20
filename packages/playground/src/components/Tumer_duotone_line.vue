<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="12"
            cy="14"
            r="8"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="M12 14v-3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M17.5 7.5 19 6m-8.932-2.63c.114-.106.365-.2.714-.267C11.132 3.036 11.56 3 12 3s.868.036 1.218.103c.349.067.6.161.714.268"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tumerDuotoneLine",
} as DefineComponent;
</script>
