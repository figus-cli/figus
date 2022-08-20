<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M5.338 18.32c.66-2.793 3.434-4.32 6.305-4.32h.714c2.871 0 5.644 1.527 6.305 4.32.128.541.23 1.107.287 1.682.055.55-.397.998-.949.998H6c-.552 0-1.004-.449-.949-.998.057-.575.159-1.14.287-1.681Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAlt",
} as DefineComponent;
</script>
