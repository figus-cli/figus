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
            d="m14 12 .707-.707.707.707-.707.707L14 12ZM4 13a1 1 0 1 1 0-2v2Zm4.707-7.707 6 6-1.414 1.414-6-6 1.414-1.414Zm6 7.414-6 6-1.414-1.414 6-6 1.414 1.414ZM14 13H4v-2h10v2Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M20 5v14" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowRightStop",
} as DefineComponent;
</script>
