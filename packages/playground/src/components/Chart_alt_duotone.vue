<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="18"
            height="18"
            x="3"
            y="3"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="m18 8-3.895 4.87a.15.15 0 0 1-.224.012l-2.765-2.766a.15.15 0 0 0-.221.01L6 16"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chartAltDuotone",
} as DefineComponent;
</script>
