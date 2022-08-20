<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="8"
            cy="15"
            r="3"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="2"
        />
        <path
            fill="currentColor"
            d="M18.207 6.207a1 1 0 0 0-1.414-1.414l1.414 1.414Zm.086 3.5.707.707L20.414 9l-.707-.707-1.414 1.414Zm-2 0 .707.707L18.414 9l-.707-.707-1.414 1.414Zm-7 2.586a1 1 0 0 0 1.414 1.414l-1.414-1.414Zm6.5-1.086.707.707 1.414-1.414-.707-.707-1.414 1.414Zm1.414-4 1-1-1.414-1.414-1 1 1.414 1.414Zm-1.414 0 2.5 2.5 1.414-1.414-2.5-2.5-1.414 1.414Zm.414 1 1-1-1.414-1.414-1 1 1.414 1.414Zm-1.414 0 1.5 1.5 1.414-1.414-1.5-1.5-1.414 1.414Zm-4.086 5.5 4.5-4.5-1.414-1.414-4.5 4.5 1.414 1.414Zm4.5-4.5 1-1-1.414-1.414-1 1 1.414 1.414Zm-1.414 0 2 2 1.414-1.414-2-2-1.414 1.414Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "keyFill",
} as DefineComponent;
</script>
