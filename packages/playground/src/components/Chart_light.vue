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
            d="M8 10v6m4-4v4m4-8v8"
        />
        <rect width="18" height="16" x="3" y="4" stroke="currentColor" rx="2" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chartLight",
} as DefineComponent;
</script>
