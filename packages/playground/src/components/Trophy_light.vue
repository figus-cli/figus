<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" d="M16.5 20.5h-9" />
        <path
            fill="currentColor"
            d="M12.5 18.5a.5.5 0 0 1-1 0h1Zm-1 0V16h1v2.5h-1Z"
        />
        <path
            stroke="currentColor"
            d="M10.5 9.5h3m-8 5s-2-1.5-2-4v-2a2 2 0 1 1 4 0v1m11 5s2-1.5 2-4v-2a2 2 0 1 0-4 0v1"
        />
        <path
            fill="currentColor"
            d="m12.555 16.13-.278-.416.278.416ZM9.28 14.687l.278-.416-.278.416Zm5.438 0-.277-.416.277.416ZM16 7.5v3.86h1V7.5h-1Zm-8 3.86V7.5H7v3.86h1Zm6.441 2.911-2.164 1.443.555.832 2.164-1.442-.555-.833Zm-2.718 1.443-2.164-1.443-.555.833 2.164 1.442.555-.832ZM14.5 5h-5v1h5V5Zm-2.223 10.714a.5.5 0 0 1-.554 0l-.555.832a1.5 1.5 0 0 0 1.664 0l-.555-.832ZM7 11.36a4.5 4.5 0 0 0 2.004 3.744l.555-.832A3.5 3.5 0 0 1 8 11.36H7Zm9 0a3.5 3.5 0 0 1-1.558 2.912l.554.832A4.5 4.5 0 0 0 17 11.36h-1ZM8 7.5A1.5 1.5 0 0 1 9.5 6V5A2.5 2.5 0 0 0 7 7.5h1Zm9 0A2.5 2.5 0 0 0 14.5 5v1A1.5 1.5 0 0 1 16 7.5h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "trophyLight",
} as DefineComponent;
</script>
