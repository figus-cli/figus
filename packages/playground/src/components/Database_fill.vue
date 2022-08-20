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
            d="M20 9.704a8.39 8.39 0 0 1-1.449.913C16.71 11.538 14.352 12 12 12s-4.71-.462-6.551-1.383A8.39 8.39 0 0 1 4 9.704V12c0 1.058.838 2.076 2.343 2.828C7.843 15.578 9.878 16 12 16s4.157-.421 5.657-1.172C19.162 14.076 20 13.058 20 12V9.704Zm0 6a8.39 8.39 0 0 1-1.449.913C16.71 17.538 14.352 18 12 18s-4.71-.462-6.551-1.383A8.39 8.39 0 0 1 4 15.704V18c0 2.21 3.582 4 8 4s8-1.79 8-4v-2.296ZM20 6c0-2.21-3.582-4-8-4S4 3.79 4 6c0 1.058.838 2.076 2.343 2.828C7.843 9.578 9.878 10 12 10s4.157-.421 5.657-1.172C19.162 8.076 20 7.058 20 6Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "databaseFill",
} as DefineComponent;
</script>
