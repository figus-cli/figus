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
            d="M6 14h12a3 3 0 1 0 0-6c-.64 0-1.174-.461-1.436-1.045a5.001 5.001 0 0 0-9.128 0C7.174 7.539 6.64 8 6 8a3 3 0 1 0 0 6Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 19v-2m5 3v-3M7 21v-4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "rainFill",
} as DefineComponent;
</script>
