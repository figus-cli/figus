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
            d="M9.5 14.5v-3m5 3v-3M3 6.5h18c-1.405 0-2.107 0-2.611.337a2 2 0 0 0-.552.552C17.5 7.893 17.5 8.595 17.5 10v5.5c0 1.886 0 2.828-.586 3.414-.586.586-1.528.586-3.414.586h-3c-1.886 0-2.828 0-3.414-.586C6.5 18.328 6.5 17.386 6.5 15.5V10c0-1.405 0-2.107-.337-2.611a2 2 0 0 0-.552-.552C5.107 6.5 4.404 6.5 3 6.5Zm6.5-3s.5-1 2.5-1 2.5 1 2.5 1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "trashLight",
} as DefineComponent;
</script>
