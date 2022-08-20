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
            d="m8 4 .707-.707L8 2.586l-.707.707L8 4Zm12 5a1 1 0 1 0-2 0h2Zm-6.293-.707-5-5-1.414 1.414 5 5 1.414-1.414Zm-6.414-5-5 5 1.414 1.414 5-5-1.414-1.414ZM7 4v10.5h2V4H7Zm13 10.5V9h-2v5.5h2ZM13.5 21a6.5 6.5 0 0 0 6.5-6.5h-2a4.5 4.5 0 0 1-4.5 4.5v2ZM7 14.5a6.5 6.5 0 0 0 6.5 6.5v-2A4.5 4.5 0 0 1 9 14.5H7Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refundTop",
} as DefineComponent;
</script>
