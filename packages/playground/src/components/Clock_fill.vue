<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.9-2.829a4 4 0 0 1 2.828 2.829"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm1-12a1 1 0 1 0-2 0v3.75c0 .69.56 1.25 1.25 1.25H15a1 1 0 1 0 0-2h-2V8Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "clockFill",
} as DefineComponent;
</script>
