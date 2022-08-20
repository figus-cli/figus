<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-12a5 5 0 0 0-5 5 1 1 0 1 0 2 0 3 3 0 0 1 3-3 1 1 0 1 0 0-2Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="2" d="m20 20-2-2" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "searchAltFill",
} as DefineComponent;
</script>
