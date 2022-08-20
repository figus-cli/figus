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
            d="M5 12V4m14 16v-3M5 20v-4m14-3V4m-7 3V4m0 16v-9"
        />
        <circle cx="5" cy="14" r="2" stroke="currentColor" />
        <circle cx="12" cy="9" r="2" stroke="currentColor" />
        <circle cx="19" cy="15" r="2" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "filter",
} as DefineComponent;
</script>
