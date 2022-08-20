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
            stroke="currentColor"
            stroke-linejoin="round"
            rx="3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M5.5 11a6.5 6.5 0 0 0 13 0M12 21v-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "micLight",
} as DefineComponent;
</script>
