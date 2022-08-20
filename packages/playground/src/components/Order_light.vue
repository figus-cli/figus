<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="14" height="17" x="5" y="4" stroke="currentColor" rx="2" />
        <path fill="none" stroke="currentColor" d="M9 9h6m-6 4h6m-6 4h4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "orderLight",
} as DefineComponent;
</script>
