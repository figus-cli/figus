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
            stroke-linejoin="round"
            d="m10.5 7.5 2 3-2 3h-3l-2-3 2-3h3Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="m15.5 4.5 2 3-2 3h-3l-2-3 2-3h3Zm0 12 2 3m-12-15 2 3m5 9-1 1.5m-4-4.5-1 1.5m-1-4.5h-1m13 3h3m-5-3 2 3-2 3h-3l-2-3 2-3h3Z"
        />
        <circle cx="10.5" cy="19.5" r=".5" fill="currentColor" />
        <circle cx="5.5" cy="16.5" r=".5" fill="currentColor" />
        <circle cx="2.5" cy="10.5" r=".5" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chemistryLight",
} as DefineComponent;
</script>
