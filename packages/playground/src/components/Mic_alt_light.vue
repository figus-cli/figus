<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="12"
            height="16"
            x="6"
            y="3"
            stroke="currentColor"
            stroke-linejoin="round"
            rx="6"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M12 22v-3m-2-6H7m11 0h-2m-6-4H7m11 0h-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "micAltLight",
} as DefineComponent;
</script>
