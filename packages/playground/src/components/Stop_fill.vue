<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="4" height="14" x="6" y="5" fill="currentColor" rx="1" />
        <rect width="4" height="14" x="14" y="5" fill="currentColor" rx="1" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "stopFill",
} as DefineComponent;
</script>
