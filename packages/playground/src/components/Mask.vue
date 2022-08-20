<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M8.5 8.5h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Zm-2 2H4.825a1.675 1.675 0 0 0-1.59 2.205 1.675 1.675 0 0 0 1.06 1.06L6.5 14.5m11-4h1.675a1.676 1.676 0 0 1 1.59 2.205 1.675 1.675 0 0 1-1.06 1.06L17.5 14.5m-5.5-4v4m2-2h-4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mask",
} as DefineComponent;
</script>
