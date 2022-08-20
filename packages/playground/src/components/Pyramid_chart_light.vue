<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            d="M11.866 3.268 3.108 20.783a.15.15 0 0 0 .135.217h17.514a.15.15 0 0 0 .134-.217L12.135 3.268a.15.15 0 0 0-.268 0ZM19 17H5m12-4H7m8-4H9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pyramidChartLight",
} as DefineComponent;
</script>
