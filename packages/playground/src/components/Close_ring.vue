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
            d="M12 21A9 9 0 0 1 3.685 8.556a9 9 0 1 1 14.679 9.808A9 9 0 0 1 12 21ZM9 9l6 6m0-6-6 6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "closeRing",
} as DefineComponent;
</script>
