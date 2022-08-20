<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="17"
            height="14"
            x="3"
            y="5"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
        />
        <path
            fill="currentColor"
            d="M7.707 9.293a1 1 0 0 0-1.414 1.414l1.414-1.414Zm-1.414 4a1 1 0 0 0 1.414 1.414l-1.414-1.414ZM9 12l.707.707a1 1 0 0 0 0-1.414L9 12Zm-2.707-1.293 2 2 1.414-1.414-2-2-1.414 1.414Zm2 .586-2 2 1.414 1.414 2-2-1.414-1.414Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M12 14h4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "terminal",
} as DefineComponent;
</script>
