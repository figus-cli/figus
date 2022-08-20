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
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-8 1v4h-2v-4H7v-2h4V7h2v4h4v2h-4Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "addRingFill",
} as DefineComponent;
</script>
