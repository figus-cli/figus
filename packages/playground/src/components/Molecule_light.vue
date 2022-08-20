<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="2.5" stroke="currentColor" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="m10 14-3.5 3.5m4-7L6 6"
        />
        <circle cx="17" cy="17" r="1.5" stroke="currentColor" />
        <circle cx="20" cy="12" r="1.5" stroke="currentColor" />
        <path stroke="currentColor" stroke-linejoin="round" d="M18.5 12h-4" />
        <path
            fill="currentColor"
            d="m13.646 14.354 2 2 .708-.708-2-2-.708.708Z"
        />
        <circle cx="19" cy="5" r="2.5" stroke="currentColor" />
        <path stroke="currentColor" stroke-linejoin="round" d="m17 7-3 3" />
        <circle cx="5" cy="5" r="1.5" stroke="currentColor" />
        <circle cx="5" cy="19" r="2.5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "moleculeLight",
} as DefineComponent;
</script>
