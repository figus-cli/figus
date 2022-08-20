<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            d="m17.344 8.075-4.463 8.29a1 1 0 0 1-1.761 0l-4.464-8.29c-.477-.885.504-1.84 1.377-1.342l3.47 1.984a1 1 0 0 0 .993 0l3.472-1.984c.872-.499 1.853.457 1.376 1.342Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M4 19h5m6 0h5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "jumpTimeFill",
} as DefineComponent;
</script>
