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
            d="M5 15.5c5.5 0 5.5-6.5 0-7m12 7c5.5 0 5.5-6.5 0-7m-6 7c5.5 0 5.5-6.5 0-7m6 7H4.5m12.5-7H5"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M4.5 15.5a2 2 0 0 1-1.99-2.196 2 2 0 0 1 3.922-.322"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "rollLightLight",
} as DefineComponent;
</script>
