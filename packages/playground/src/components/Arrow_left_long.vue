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
            d="M7 11a1 1 0 1 0 0 2v-2Zm14 2a1 1 0 1 0 0-2v2ZM7 13h14v-2H7v2Z"
        />
        <path
            fill="currentColor"
            d="m2.285 11.797 5.45-3.893A.8.8 0 0 1 9 8.554v6.891a.8.8 0 0 1-1.265.651l-5.45-3.893a.25.25 0 0 1 0-.406Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowLeftLong",
} as DefineComponent;
</script>
