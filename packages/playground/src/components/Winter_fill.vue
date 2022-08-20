<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="13" r="4" fill="currentColor" />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 9V7m0-3v3m0 0L9 5m3 2 3-2m.5 7.5h2m3 0h-3m0 0 2-3m-2 3 2 3M12 16v2m0 3v-3m0 0-3 2m3-2 3 2m-6.5-7.5h-2m-3 0h3m0 0-2-3m2 3-2 3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "winterFill",
} as DefineComponent;
</script>
