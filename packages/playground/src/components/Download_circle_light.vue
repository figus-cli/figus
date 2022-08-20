<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" d="M5.239 14.812a7 7 0 0 0 13.523 0" />
        <path
            fill="currentColor"
            d="m12 4-.312-.39.312-.25.312.25L12 4Zm.5 9a.5.5 0 0 1-1 0h1ZM6.688 7.61l5-4 .624.78-5 4-.624-.78Zm5.624-4 5 4-.624.78-5-4 .624-.78ZM12.5 4v9h-1V4h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "downloadCircleLight",
} as DefineComponent;
</script>
