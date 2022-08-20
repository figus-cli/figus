<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="10" cy="8" r="4" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M15.796 20.447A6 6 0 0 0 10 16a6 6 0 0 0-5.796 4.447M19 10v6m3-3h-6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAddAlt",
} as DefineComponent;
</script>
