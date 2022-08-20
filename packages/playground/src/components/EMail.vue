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
            d="M21 12a9 9 0 0 0-6.107-8.522 9 9 0 1 0-.564 17.215"
        />
        <circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M16 9v4.5a2.5 2.5 0 0 0 5 0V12"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "eMail",
} as DefineComponent;
</script>
