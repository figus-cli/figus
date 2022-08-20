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
            d="M3 3V2H2v1h1Zm9.293 10.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM4 11V3H2v8h2ZM3 4h8V2H3v2Zm-.707-.293 10 10 1.414-1.414-10-10-1.414 1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M4 15c0 1.87 0 2.804.402 3.5A3 3 0 0 0 5.5 19.598C6.196 20 7.13 20 9 20h5c2.828 0 4.243 0 5.121-.879C20 18.243 20 16.828 20 14V9c0-1.87 0-2.804-.402-3.5A3 3 0 0 0 18.5 4.402C17.804 4 16.87 4 15 4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "out",
} as DefineComponent;
</script>
