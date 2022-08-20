<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="10" cy="14" r="7" fill="currentColor" fill-opacity=".24" />
        <path stroke="currentColor" stroke-width="1.2" d="m6 13 4 3 7-9" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "doneDuotoneLine",
} as DefineComponent;
</script>
