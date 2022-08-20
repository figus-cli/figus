<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
        <path
            fill="currentColor"
            d="M18.364 5.636a9 9 0 0 0-12.728 0 9 9 0 0 0 0 12.728L12 12l6.364-6.364Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "colorMode",
} as DefineComponent;
</script>
