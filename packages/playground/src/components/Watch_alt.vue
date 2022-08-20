<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="10"
            height="10"
            x="7"
            y="7"
            stroke="currentColor"
            stroke-width="2"
            rx="3"
        />
        <path
            fill="currentColor"
            d="M9 4c0-.943 0-1.414.293-1.707C9.586 2 10.057 2 11 2h2c.943 0 1.414 0 1.707.293C15 2.586 15 3.057 15 4v3H9V4Zm0 16c0 .943 0 1.414.293 1.707C9.586 22 10.057 22 11 22h2c.943 0 1.414 0 1.707-.293C15 21.414 15 20.943 15 20v-3H9v3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "watchAlt",
} as DefineComponent;
</script>
