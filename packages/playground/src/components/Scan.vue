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
            stroke-width="2"
            d="M9 3H8c-.93 0-1.395 0-1.776.102a3 3 0 0 0-2.122 2.122C4 5.604 4 6.07 4 7m11-4h1c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.122C20 5.604 20 6.07 20 7m0 8v1c0 1.87 0 2.804-.402 3.5a3 3 0 0 1-1.098 1.098C17.804 21 16.87 21 15 21M4 15v1c0 1.87 0 2.804.402 3.5A3 3 0 0 0 5.5 20.598C6.196 21 7.13 21 9 21"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M3 15h18M7 11v4h10v-4c0-.943 0-1.414-.293-1.707C16.414 9 15.943 9 15 9H9c-.943 0-1.414 0-1.707.293C7 9.586 7 10.057 7 11Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "scan",
} as DefineComponent;
</script>
