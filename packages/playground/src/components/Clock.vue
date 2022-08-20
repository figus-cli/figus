<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="7" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.9-2.829a4 4 0 0 1 2.828 2.829M12 8v3.75a.25.25 0 0 0 .25.25H15"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "clock",
} as DefineComponent;
</script>
