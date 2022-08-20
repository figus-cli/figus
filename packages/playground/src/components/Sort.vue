<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="none" stroke="currentColor" d="M5 7h14M5 12h10M5 17h6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sort",
} as DefineComponent;
</script>
