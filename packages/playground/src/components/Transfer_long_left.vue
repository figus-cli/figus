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
            stroke-width="2"
            d="M22 14H10v3.565a.2.2 0 0 1-.33.152L3 12l6.67-5.717a.2.2 0 0 1 .33.152V10h12"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transferLongLeft",
} as DefineComponent;
</script>
