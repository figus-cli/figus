<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" stroke-width="2" d="M5 4 3 6m16-2 2 2" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm2.78-9.875a1 1 0 1 0-1.56-1.25l-1.428 1.784-2.237-1.491a1 1 0 0 0-1.11 1.664l2.81 1.873a1.25 1.25 0 0 0 1.67-.26l1.856-2.32Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "alarmclockFill",
} as DefineComponent;
</script>
