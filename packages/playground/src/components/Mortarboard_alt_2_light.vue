<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            d="M19.5 8.5h-15a1 1 0 1 1 0-2h15a1 1 0 1 1 0 2Z"
        />
        <path
            fill="currentColor"
            d="M20 8.5a.5.5 0 0 0-1 0h1Zm-1 8a.5.5 0 0 0 1 0h-1Zm0-8v8h1v-8h-1Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="m7.5 8.5-.98 6.857a.15.15 0 0 0 .122.169l5.331.97a.15.15 0 0 0 .054 0l5.33-.97a.15.15 0 0 0 .123-.169L16.5 8.5"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="m6.5 13.5 5.473.995a.15.15 0 0 0 .054 0L17.5 13.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mortarboardAlt_2Light",
} as DefineComponent;
</script>
