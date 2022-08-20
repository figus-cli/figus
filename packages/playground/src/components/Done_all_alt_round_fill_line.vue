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
            stroke-width="1.2"
            d="m2 14 3.233 2.425a1 1 0 0 0 1.374-.167L15 6"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="m9.951 15.33 1.902 1.52a1.6 1.6 0 0 0 2.238-.236L22.464 6.38a.6.6 0 0 0-.928-.76l-8.374 10.235a.4.4 0 0 1-.56.059l-1.89-1.513-.76.928Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneAllAltRoundFillLine",
} as DefineComponent;
</script>
