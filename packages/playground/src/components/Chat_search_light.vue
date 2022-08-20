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
            d="M14.5 18.5h-8a1 1 0 0 1-1-1v-8a4 4 0 0 1 4-4h5a4 4 0 0 1 4 4v2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M7.5 10.5h7m-7 3h5"
        />
        <circle cx="16.5" cy="15.5" r="2" stroke="currentColor" />
        <path fill="none" stroke="currentColor" d="m19 18 1.5 1.5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatSearchLight",
} as DefineComponent;
</script>
