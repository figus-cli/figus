<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="4" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M12 8V4m0 16v-4M9.172 9.171 6.343 6.343m11.314 11.314-2.829-2.829M16 12h4M4 12h4m6.828-2.829 2.829-2.828M6.343 17.657l2.829-2.829"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sunlightLight",
} as DefineComponent;
</script>
