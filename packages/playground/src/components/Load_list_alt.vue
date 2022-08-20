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
            d="M3 3h18M5 3h14v14.9c0 .037 0 .056-.004.073a.151.151 0 0 1-.018.043c-.01.015-.022.028-.048.054l-2.86 2.86a.32.32 0 0 1-.054.048.151.151 0 0 1-.043.018c-.017.004-.036.004-.072.004H8.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C5 19.48 5 18.92 5 17.8V3Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M14 21v-4.85a.15.15 0 0 1 .15-.15H19m-7-3V7m-3 3 2.894-2.894a.15.15 0 0 1 .212 0L15 10"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadListAlt",
} as DefineComponent;
</script>
