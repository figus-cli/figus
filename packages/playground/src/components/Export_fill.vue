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
            d="m12 5-.707-.707.707-.707.707.707L12 5ZM6.293 9.293l5-5 1.414 1.414-5 5-1.414-1.414Zm6.414-5 5 5-1.414 1.414-5-5 1.414-1.414ZM13 5v6.5h-2V5h2Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M11 13v3.5a1 1 0 1 0 2 0V13h5a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h5Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "exportFill",
} as DefineComponent;
</script>
