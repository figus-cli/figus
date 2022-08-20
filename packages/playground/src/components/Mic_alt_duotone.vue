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
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            rx="6"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="M12 22v-3m-2-6H7m11 0h-2m-6-4H7m11 0h-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "micAltDuotone",
} as DefineComponent;
</script>
