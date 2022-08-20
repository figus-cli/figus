<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="14" r="8" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M12 14v-3m5.5-3.5L19 6m-8.932-3.63c.114-.106.365-.2.714-.267C11.132 2.036 11.56 2 12 2s.868.036 1.218.103c.349.067.6.161.714.268"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tumer",
} as DefineComponent;
</script>
