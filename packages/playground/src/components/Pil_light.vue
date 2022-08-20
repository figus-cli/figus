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
            stroke-linejoin="round"
            d="m11 18 7-7a3.536 3.536 0 0 0-5-5l-7 7a3.536 3.536 0 0 0 5 5Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M14.5 14.5a9.52 9.52 0 0 1-5-5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pilLight",
} as DefineComponent;
</script>
