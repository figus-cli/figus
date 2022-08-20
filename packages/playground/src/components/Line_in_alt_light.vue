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
            height="6"
            x="15"
            y="9"
            stroke="currentColor"
            rx="2"
            transform="rotate(-90 15 9)"
        />
        <path fill="none" stroke="currentColor" d="m6 21-3-4 3-4" />
        <path
            fill="none"
            stroke="currentColor"
            d="M3 17h7c3.771 0 5.657 0 6.828-1.172C18 14.657 18 12.771 18 9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lineInAltLight",
} as DefineComponent;
</script>
