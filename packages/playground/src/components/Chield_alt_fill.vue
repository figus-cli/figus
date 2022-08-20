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
            d="m15 17.75 1.8-1.35A8 8 0 0 0 20 10V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4a8 8 0 0 0 3.2 6.4L9 17.75a5 5 0 0 0 6 0ZM10 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm2 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chieldAltFill",
} as DefineComponent;
</script>
