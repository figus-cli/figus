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
            d="M5.239 14.812a7 7 0 0 0 13.523 0"
        />
        <path
            fill="currentColor"
            d="m12 4-.375-.469.375-.3.375.3L12 4Zm.6 9a.6.6 0 1 1-1.2 0h1.2ZM6.625 7.532l5-4 .75.937-5 4-.75-.937Zm5.75-4 5 4-.75.937-5-4 .75-.937ZM12.6 4v9h-1.2V4h1.2Z"
        />
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
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "downloadCircleDuotoneLine",
} as DefineComponent;
</script>
