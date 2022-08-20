<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="3.5" stroke="currentColor" />
        <path fill="none" stroke="currentColor" d="M21 12s-1-8-9-8-9 8-9 8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "viewAltLight",
} as DefineComponent;
</script>
