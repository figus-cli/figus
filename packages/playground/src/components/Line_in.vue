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
            d="M15 9V6c0-.943 0-1.414.293-1.707C15.586 4 16.057 4 17 4h1c.943 0 1.414 0 1.707.293C20 4.586 20 5.057 20 6v1c0 .943 0 1.414-.293 1.707C19.414 9 18.943 9 18 9h-3ZM9 20H4v-5m0 5L15 9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lineIn",
} as DefineComponent;
</script>
