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
            d="M8 8V7a4 4 0 0 1 8 0v1m-1 6v-2m-6 2v-2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M4 12c0-1.886 0-2.828.586-3.414C5.172 8 6.114 8 8 8h8c1.886 0 2.828 0 3.414.586C20 9.172 20 10.114 20 12v1c0 3.771 0 5.657-1.172 6.828C17.657 21 15.771 21 12 21c-3.771 0-5.657 0-6.828-1.172C4 18.657 4 16.771 4 13v-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bag",
} as DefineComponent;
</script>
