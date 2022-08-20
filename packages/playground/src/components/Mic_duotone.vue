<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="6"
            height="11"
            x="9"
            y="3"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            rx="3"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="M5.4 11a6.6 6.6 0 1 0 13.2 0M12 21v-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "micDuotone",
} as DefineComponent;
</script>
