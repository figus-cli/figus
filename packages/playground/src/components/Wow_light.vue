<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
        <circle cx="9" cy="9" r="1" fill="currentColor" stroke="currentColor" />
        <circle
            cx="15"
            cy="9"
            r="1"
            fill="currentColor"
            stroke="currentColor"
        />
        <path
            fill="currentColor"
            d="M15 15.5c0 1.38-1.343 2.5-3 2.5s-3-1.12-3-2.5 1.343-2.5 3-2.5 3 1.12 3 2.5Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "wowLight",
} as DefineComponent;
</script>
