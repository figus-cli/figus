<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="4"
            height="4"
            x="18"
            y="9"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
            transform="rotate(90 18 9)"
        />
        <rect
            width="4"
            height="4"
            x="18"
            y="17"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
            transform="rotate(90 18 17)"
        />
        <rect
            width="4"
            height="4"
            x="3"
            y="7"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
            transform="rotate(-90 3 7)"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5 6v9c0 1.886 0 2.828.586 3.414C6.172 19 7.114 19 9 19h5"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5 7c0 1.886 0 2.828.586 3.414C6.172 11 7.114 11 9 11h5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "subttasksFill",
} as DefineComponent;
</script>
