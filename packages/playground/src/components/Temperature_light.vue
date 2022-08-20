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
            d="m15.384 12.319-.339.368.339-.368ZM9.5 6A2.5 2.5 0 0 1 12 3.5v-1A3.5 3.5 0 0 0 8.5 6h1Zm0 5.5V6h-1v5.5h1Zm-2 4.5c0-1.31.56-2.49 1.455-3.313l-.677-.736A5.487 5.487 0 0 0 6.5 16h1Zm4.5 4.5A4.5 4.5 0 0 1 7.5 16h-1a5.5 5.5 0 0 0 5.5 5.5v-1Zm4.5-4.5a4.5 4.5 0 0 1-4.5 4.5v1a5.5 5.5 0 0 0 5.5-5.5h-1Zm-1.455-3.313A4.487 4.487 0 0 1 16.5 16h1a5.487 5.487 0 0 0-1.778-4.049l-.677.736ZM14.5 6v5.5h1V6h-1ZM12 3.5A2.5 2.5 0 0 1 14.5 6h1A3.5 3.5 0 0 0 12 2.5v1Zm3.722 8.451a.629.629 0 0 1-.222-.45h-1c0 .479.231.897.545 1.186l.677-.736Zm-7.222-.45c0 .148-.074.313-.222.45l.677.736c.314-.289.545-.707.545-1.187h-1Z"
        />
        <circle cx="12" cy="16" r="2.5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "temperatureLight",
} as DefineComponent;
</script>
