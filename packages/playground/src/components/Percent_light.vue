<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="none" stroke="currentColor" d="M18 6 6 18" />
        <circle cx="7" cy="8" r="3.5" stroke="currentColor" />
        <circle cx="17" cy="16" r="3.5" stroke="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "percentLight",
} as DefineComponent;
</script>
