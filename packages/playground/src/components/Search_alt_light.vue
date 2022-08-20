<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="11" cy="11" r="6" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M11 8a3 3 0 0 0-3 3m12 9-3-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "searchAltLight",
} as DefineComponent;
</script>
