<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16.5 12h-4.25a.25.25 0 0 1-.25-.25V8.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "time",
} as DefineComponent;
</script>
