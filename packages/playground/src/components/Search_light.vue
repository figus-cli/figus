<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="11" cy="11" r="6" stroke="currentColor" />
        <path fill="none" stroke="currentColor" d="m20 20-3-3" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "searchLight",
} as DefineComponent;
</script>
