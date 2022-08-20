<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            r="10"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            transform="matrix(-1 0 0 1 12 12)"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M12 12v6m0-11V6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "infoDuotoneLine",
} as DefineComponent;
</script>
