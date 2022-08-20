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
            d="M13.736 21.848a10.002 10.002 0 0 0 6.455-4.112 10 10 0 0 0 1.657-7.473 10.001 10.001 0 0 0-4.112-6.455 10 10 0 0 0-11.109-.242 10 10 0 0 0 7.11 18.282Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M12 12v6m0-11V6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "info",
} as DefineComponent;
</script>
