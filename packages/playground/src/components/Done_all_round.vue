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
            d="m8 13 4.228 3.382a1 1 0 0 0 1.398-.148L22 6"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m11.19 12.237 4.584-5.604a1 1 0 0 0-1.548-1.266l-4.573 5.59 1.536 1.28Zm-3.167 3.87-1.537-1.28-.653.798L2.6 13.2a1 1 0 0 0-1.2 1.6l3.233 2.425a2 2 0 0 0 2.748-.334l.642-.784Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneAllRound",
} as DefineComponent;
</script>
