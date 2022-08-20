<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="none" stroke="currentColor" d="M10 8h10M4 16h10" />
        <circle
            cx="7"
            cy="8"
            stroke="currentColor"
            transform="rotate(90 7 8)"
            r="3"
        />
        <circle
            cx="17"
            cy="16"
            stroke="currentColor"
            transform="rotate(90 17 16)"
            r="3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "filterBig",
} as DefineComponent;
</script>
