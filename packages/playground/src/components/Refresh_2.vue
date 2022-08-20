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
            d="m10 19-.707-.707-.707.707.707.707L10 19Zm3.293-4.707-4 4 1.414 1.414 4-4-1.414-1.414Zm-4 5.414 4 4 1.414-1.414-4-4-1.414 1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M18.062 8.5a7 7 0 0 1 0 7A7 7 0 0 1 12 19"
        />
        <path
            fill="currentColor"
            d="m14 5 .707.707.707-.707-.707-.707L14 5Zm-3.293 4.707 4-4-1.414-1.414-4 4 1.414 1.414Zm4-5.414-4-4-1.414 1.414 4 4 1.414-1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5.938 15.5A7 7 0 0 1 8.5 5.938 7 7 0 0 1 12 5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refresh_2",
} as DefineComponent;
</script>
