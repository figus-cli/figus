<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="4"
            height="4"
            x="18"
            y="15"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
            transform="rotate(90 18 15)"
        />
        <rect
            width="4"
            height="4"
            x="6"
            y="8"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
            transform="rotate(-90 6 8)"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M8 8v5c0 1.886 0 2.828.586 3.414C9.172 17 10.114 17 12 17h2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "nestingDuotone",
} as DefineComponent;
</script>
