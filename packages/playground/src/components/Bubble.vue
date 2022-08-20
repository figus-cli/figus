<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="17" cy="8" r="4" stroke="currentColor" stroke-width="2" />
        <circle cx="12" cy="17" r="3" stroke="currentColor" stroke-width="2" />
        <circle
            cx="6.5"
            cy="9.5"
            r="2.5"
            stroke="currentColor"
            stroke-width="2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bubble",
} as DefineComponent;
</script>
