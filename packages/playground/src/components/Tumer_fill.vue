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
            d="M21 14a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm1-10a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M17.5 7.5 19 6m-8.932-3.63c.114-.106.365-.2.714-.267C11.132 2.036 11.56 2 12 2s.868.036 1.218.103c.349.067.6.161.714.268"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tumerFill",
} as DefineComponent;
</script>
