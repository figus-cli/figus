<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="14"
            height="4"
            x="5"
            y="15"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            fill="currentColor"
            d="m12 14-.424.424.424.425.424-.425L12 14Zm.6-9a.6.6 0 1 0-1.2 0h1.2ZM6.576 9.424l5 5 .848-.848-5-5-.848.848Zm5.848 5 5-5-.848-.848-5 5 .848.848ZM12.6 14V5h-1.2v9h1.2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M5 16v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "importDuotoneLine",
} as DefineComponent;
</script>
