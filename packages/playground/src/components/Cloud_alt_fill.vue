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
            d="M8.29 10A7 7 0 1 1 15 19H6.5a4.5 4.5 0 1 1 0-9h1.79Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cloudAltFill",
} as DefineComponent;
</script>
