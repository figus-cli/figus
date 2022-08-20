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
            x="16"
            y="9"
            stroke="currentColor"
            rx="2"
            transform="rotate(90 16 9)"
        />
        <rect
            width="4"
            height="4"
            x="20"
            y="17"
            stroke="currentColor"
            rx="2"
            transform="rotate(90 20 17)"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M5 4v11c0 1.886 0 2.828.586 3.414C6.172 19 7.114 19 9 19h7"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M5 7c0 1.886 0 2.828.586 3.414C6.172 11 7.114 11 9 11h3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "subttasksAltLight",
} as DefineComponent;
</script>
