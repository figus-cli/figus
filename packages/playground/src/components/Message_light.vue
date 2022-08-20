<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="16" height="12" x="4" y="6" stroke="currentColor" rx="2" />
        <path
            fill="none"
            stroke="currentColor"
            d="m4 9 7.106 3.553a2 2 0 0 0 1.788 0L20 9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "messageLight",
} as DefineComponent;
</script>
