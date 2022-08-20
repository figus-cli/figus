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
            d="m2 14 3.233 2.425a1 1 0 0 0 1.374-.167L15 6"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m10.191 15.393 1.724 1.38a1.5 1.5 0 0 0 2.098-.222l8.374-10.234a.5.5 0 0 0-.774-.634l-8.374 10.235a.5.5 0 0 1-.699.074l-1.716-1.373-.633.774Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneAllAltRoundLight",
} as DefineComponent;
</script>
