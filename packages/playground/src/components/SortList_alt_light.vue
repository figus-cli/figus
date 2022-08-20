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
            d="M4.5 8v8h1V8h-1Zm.724-3.553L6.71 7.421A.4.4 0 0 1 6.353 8H3.647a.4.4 0 0 1-.358-.579l1.487-2.974a.25.25 0 0 1 .448 0Zm0 15.106 1.487-2.974A.4.4 0 0 0 6.353 16H3.647a.4.4 0 0 0-.358.579l1.487 2.974a.25.25 0 0 0 .448 0Z"
        />
        <path stroke="currentColor" d="M11 8h8m-8 4h8m-8 4h8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortListAltLight",
} as DefineComponent;
</script>
