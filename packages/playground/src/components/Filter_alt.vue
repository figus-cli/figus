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
            stroke-width="2"
            d="M12 7h8M4 7h4m9 10h3M4 17h8"
        />
        <circle
            cx="10"
            cy="7"
            r="2"
            stroke="currentColor"
            stroke-width="2"
            transform="rotate(90 10 7)"
        />
        <circle
            cx="15"
            cy="17"
            r="2"
            stroke="currentColor"
            stroke-width="2"
            transform="rotate(90 15 17)"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "filterAlt",
} as DefineComponent;
</script>
