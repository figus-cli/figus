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
            d="M13 17H9v2.588a.2.2 0 0 1-.324.158L2 14.5l6.676-5.246A.2.2 0 0 1 9 9.412V12h6"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M11 7h4V4.412a.2.2 0 0 1 .324-.158L22 9.5l-6.676 5.246a.2.2 0 0 1-.324-.158V12H9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transger",
} as DefineComponent;
</script>
