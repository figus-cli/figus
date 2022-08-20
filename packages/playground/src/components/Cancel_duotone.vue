<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="12"
            cy="12"
            r="8.5"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
        />
        <path stroke="currentColor" d="M18 18 6 6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cancelDuotone",
} as DefineComponent;
</script>
