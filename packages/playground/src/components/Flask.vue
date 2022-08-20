<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 9v9a3 3 0 1 1-6 0V9"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 9h10"
        />
        <path
            fill="currentColor"
            d="M13 18v-2.945a.055.055 0 0 0-.055-.055h-1.89a.055.055 0 0 0-.055.055V18a1 1 0 1 0 2 0Z"
        />
        <circle
            cx="15"
            cy="4"
            r="1"
            fill="currentColor"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
        />
        <circle
            cx="8.5"
            cy="5.5"
            r="1"
            fill="currentColor"
            stroke="currentColor"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flask",
} as DefineComponent;
</script>
