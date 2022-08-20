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
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM6.586 16l.707-.707L10.586 12 7.293 8.707 6.586 8 8 6.586l.707.707L12 10.586l3.293-3.293.707-.707L17.414 8l-.707.707L13.414 12l3.293 3.293.707.707L16 17.414l-.707-.707L12 13.414l-3.293 3.293-.707.707L6.586 16Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "closeSquareFill",
} as DefineComponent;
</script>
