<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            fill="currentColor"
            fill-opacity=".24"
            transform="matrix(0 -1 -1 0 14 12)"
            r="6"
        />
        <path
            stroke="currentColor"
            stroke-opacity=".24"
            stroke-width=".6"
            d="M7.7 12a6.3 6.3 0 1 1 12.6 0 6.3 6.3 0 0 1-12.6 0Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M8 18.928a8 8 0 0 0 8 0A8 8 0 0 0 18.928 8 8 8 0 0 0 12 4a8 8 0 0 0-4 1.072"
        />
        <path
            fill="currentColor"
            d="m2 12-.469-.375-.3.375.3.375L2 12Zm9 .6a.6.6 0 1 0 0-1.2v1.2ZM5.532 6.625l-4 5 .937.75 4-5-.937-.75Zm-4 5.75 4 5 .937-.75-4-5-.937.75ZM2 12.6h9v-1.2H2v1.2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOutCircleDuotoneLine",
} as DefineComponent;
</script>
