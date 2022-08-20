<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="16" height="7" x="4" y="4" stroke="currentColor" rx="1" />
        <path
            fill="none"
            stroke="currentColor"
            d="M4 16c0-.943 0-1.414.293-1.707C4.586 14 5.057 14 6 14h4v4c0 .943 0 1.414-.293 1.707C9.414 20 8.943 20 8 20H6c-.943 0-1.414 0-1.707-.293C4 19.414 4 18.943 4 18v-2Zm10-2h4c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v2c0 .943 0 1.414-.293 1.707C19.414 20 18.943 20 18 20h-2c-.943 0-1.414 0-1.707-.293C14 19.414 14 18.943 14 18v-4Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "structureLight",
} as DefineComponent;
</script>
