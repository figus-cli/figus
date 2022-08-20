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
            d="M9 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-4.562 7.902a3 3 0 0 0-1.474 2.99 3 3 0 0 0 3.365 2.582 3.001 3.001 0 0 0 1.989-1.148 3 3 0 0 0-.554-4.207 3.001 3.001 0 0 0-2.218-.594 3.001 3.001 0 0 0-1.108.376Zm15.124 0A3 3 0 0 1 20.66 18a3 3 0 0 1-5.496-.724 3 3 0 0 1 1.072-3.156 3.002 3.002 0 0 1 2.218-.595 3.001 3.001 0 0 1 1.108.376Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M9.07 6.643a3 3 0 0 1 .42-2.285 9 9 0 0 0-6.23 10.79 3 3 0 0 1 1.77-1.507 6.997 6.997 0 0 1 .503-3.32A7 7 0 0 1 9.07 6.643Zm5.86 0a7 7 0 0 1 4.04 6.998 3 3 0 0 1 1.472 1.033c.114.148.214.307.298.474a9 9 0 0 0-6.23-10.79 3.001 3.001 0 0 1 .42 2.285Zm3.3 12.852a3.001 3.001 0 0 1-2.19-.779 7 7 0 0 1-8.08 0 3.001 3.001 0 0 1-2.19.78 9 9 0 0 0 12.46 0Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "groupShare",
} as DefineComponent;
</script>
