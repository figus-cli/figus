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
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            d="M9 15v3c0 .943 0 1.414-.293 1.707C8.414 20 7.943 20 7 20H6c-.943 0-1.414 0-1.707-.293C4 19.414 4 18.943 4 18v-1c0-.943 0-1.414.293-1.707C4.586 15 5.057 15 6 15h3Zm6-6V6c0-.943 0-1.414.293-1.707C15.586 4 16.057 4 17 4h1c.943 0 1.414 0 1.707.293C20 4.586 20 5.057 20 6v1c0 .943 0 1.414-.293 1.707C19.414 9 18.943 9 18 9h-3Z"
        />
        <path stroke="currentColor" stroke-width="1.2" d="m15 9-6 6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lineDuotone",
} as DefineComponent;
</script>
