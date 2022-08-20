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
            d="m16 16 .707-.707.707.707-.707.707L16 16Zm-3.293-4.707 4 4-1.414 1.414-4-4 1.414-1.414Zm4 5.414-4 4-1.414-1.414 4-4 1.414 1.414Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M13 8h4m-1 8H8a4 4 0 0 1 0-8h1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxRefreshAltRight",
} as DefineComponent;
</script>
