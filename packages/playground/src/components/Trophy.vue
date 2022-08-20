<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" stroke-width="2" d="M16.5 20.5h-9" />
        <path
            fill="currentColor"
            d="M13 18.5a1 1 0 1 1-2 0h2Zm-2 0V16h2v2.5h-2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M10.5 9.5h3m-8 5s-2-1.5-2-4v-2a2 2 0 1 1 4 0v1m11 5s2-1.5 2-4v-2a2 2 0 1 0-4 0v1"
        />
        <path
            fill="currentColor"
            d="M12.555 16.13 12 15.298l.555.832ZM9.28 14.687l.555-.832-.555.832Zm5.438 0-.555-.832.555.832ZM15.5 7.5v3.86h2V7.5h-2Zm-7 3.86V7.5h-2v3.86h2Zm5.664 2.495L12 15.298l1.11 1.664 2.164-1.443-1.11-1.664ZM12 15.298l-2.164-1.443-1.11 1.664 2.165 1.443L12 15.298ZM14.5 4.5h-5v2h5v-2ZM12 15.298l-1.11 1.664a2 2 0 0 0 2.22 0L12 15.298ZM6.5 11.36a5 5 0 0 0 2.227 4.16l1.109-1.664A3 3 0 0 1 8.5 11.36h-2Zm9 0a3 3 0 0 1-1.336 2.496l1.11 1.664a5 5 0 0 0 2.226-4.16h-2ZM8.5 7.5a1 1 0 0 1 1-1v-2a3 3 0 0 0-3 3h2Zm9 0a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "trophy",
} as DefineComponent;
</script>
