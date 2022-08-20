<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="17.5"
            cy="17.5"
            r="2.5"
            stroke="currentColor"
            stroke-width="2"
        />
        <path stroke="currentColor" stroke-width="2" d="m21 21-1.5-1.5" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M4 10c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2c3.771 0 5.657 0 6.828 1.172C20 4.343 20 6.229 20 10v3.169a5 5 0 1 0-4.773 8.786C14.337 22 13.277 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4Zm4-5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2H8Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDockSearchFill",
} as DefineComponent;
</script>
