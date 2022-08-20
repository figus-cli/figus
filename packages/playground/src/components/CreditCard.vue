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
            height="13"
            x="3"
            y="6"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M7 15h.01M4 11h17"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "creditCard",
} as DefineComponent;
</script>
