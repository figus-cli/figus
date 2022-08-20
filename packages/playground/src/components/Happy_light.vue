<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
        <path stroke="currentColor" d="M9.835 13.25a2.5 2.5 0 0 0 4.33 0" />
        <rect width="3" height="2" x="7" y="8" fill="currentColor" rx="1" />
        <rect width="3" height="2" x="14" y="8" fill="currentColor" rx="1" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "happyLight",
} as DefineComponent;
</script>
