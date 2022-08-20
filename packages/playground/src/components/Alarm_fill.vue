<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            d="M9.15 7.831a2.976 2.976 0 1 1 5.7 0l-1.563 5.211c-.07.234-.105.351-.159.448a1 1 0 0 1-.654.486C12.366 14 12.244 14 12 14s-.366 0-.474-.024a1 1 0 0 1-.654-.487c-.054-.096-.09-.213-.16-.447L9.15 7.832Z"
        />
        <circle
            cx="12"
            cy="19"
            r="2"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "alarmFill",
} as DefineComponent;
</script>
