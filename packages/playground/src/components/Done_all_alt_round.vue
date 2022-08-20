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
            d="m2 14 3.233 2.425a1 1 0 0 0 1.374-.167L15 6"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m9.874 15.78 1.729 1.383a2 2 0 0 0 2.797-.295l8.374-10.235a1 1 0 0 0-1.548-1.266L12.852 15.6l-1.711-1.369-1.267 1.548Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneAllAltRound",
} as DefineComponent;
</script>
