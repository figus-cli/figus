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
            height="16"
            x="3"
            y="4"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="M8 10v6m4-4v4m4-8v8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chartDuotone",
} as DefineComponent;
</script>
