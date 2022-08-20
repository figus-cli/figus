<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M5.5 5.5a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v-13Z"
        />
        <circle
            cx="12"
            cy="10"
            r="3.5"
            stroke="currentColor"
            stroke-linejoin="round"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M13.5 10c0 1.044-.213 1.964-.533 2.605-.335.67-.706.895-.967.895s-.632-.225-.967-.895c-.32-.641-.533-1.561-.533-2.605s.213-1.964.533-2.605c.335-.67.706-.895.967-.895s.632.225.967.895c.32.641.533 1.561.533 2.605Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M15.5 10h-7m7 5.5h-7m6 2h-5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "passLight",
} as DefineComponent;
</script>
