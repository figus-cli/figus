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
            d="m20 8 .707.707.707-.707-.707-.707L20 8Zm-5 12a1 1 0 1 0 0-2v2Zm.707-6.293 5-5-1.414-1.414-5 5 1.414 1.414Zm5-6.414-5-5-1.414 1.414 5 5 1.414-1.414ZM20 7H9.5v2H20V7ZM9.5 20H15v-2H9.5v2ZM3 13.5A6.5 6.5 0 0 0 9.5 20v-2A4.5 4.5 0 0 1 5 13.5H3ZM9.5 7A6.5 6.5 0 0 0 3 13.5h2A4.5 4.5 0 0 1 9.5 9V7Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refundForward",
} as DefineComponent;
</script>
