<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            r="5"
            fill="currentColor"
            fill-opacity=".24"
            transform="matrix(0 -1 -1 0 12 15)"
        />
        <circle
            r="5.3"
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width=".6"
            transform="matrix(0 -1 -1 0 12 15)"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M5.239 14.812a7 7 0 0 0 13.523 0"
        />
        <path
            fill="currentColor"
            d="m12 13-.375.469.375.3.375-.3L12 13Zm.6-9a.6.6 0 1 0-1.2 0h1.2ZM6.625 9.469l5 4 .75-.937-5-4-.75.937Zm5.75 4 5-4-.75-.937-5 4 .75.937ZM12.6 13V4h-1.2v9h1.2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadCircleDuotoneLine",
} as DefineComponent;
</script>
