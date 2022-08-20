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
            d="M11 7a1 1 0 1 1 2 0h-2Zm2 14a1 1 0 1 1-2 0h2Zm0-14v14h-2V7h2Z"
        />
        <path
            fill="currentColor"
            d="m11.797 2.285-3.893 5.45A.8.8 0 0 0 8.554 9h6.891a.8.8 0 0 0 .651-1.265l-3.893-5.45a.25.25 0 0 0-.406 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowTopLong",
} as DefineComponent;
</script>
