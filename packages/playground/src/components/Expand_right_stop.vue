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
            d="m13 12 .707-.707.707.707-.707.707L13 12ZM7.707 5.293l6 6-1.414 1.414-6-6 1.414-1.414Zm6 7.414-6 6-1.414-1.414 6-6 1.414 1.414Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M18 7v10" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandRightStop",
} as DefineComponent;
</script>
