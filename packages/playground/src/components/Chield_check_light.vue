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
            d="m12.773 3.706 5.985 1.596a1 1 0 0 1 .742.966v6.02a6 6 0 0 1-2.672 4.993l-4.273 2.85a1 1 0 0 1-1.11 0l-4.273-2.85A6 6 0 0 1 4.5 12.29v-6.02a1 1 0 0 1 .742-.967l5.985-1.596a3 3 0 0 1 1.546 0Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="m9.5 11.5 1.823 1.823a.25.25 0 0 0 .354 0L15 10"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chieldCheckLight",
} as DefineComponent;
</script>
