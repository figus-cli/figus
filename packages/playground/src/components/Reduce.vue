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
            d="M15 15v-1h-1v1h1Zm5.293 6.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM15 9h-1v1h1V9Zm6.707-5.293a1 1 0 0 0-1.414-1.414l1.414 1.414ZM9 15h1v-1H9v1Zm-6.707 5.293a1 1 0 0 0 1.414 1.414l-1.414-1.414ZM9 9v1h1V9H9ZM3.707 2.293a1 1 0 0 0-1.414 1.414l1.414-1.414ZM16 20v-5h-2v5h2Zm-1-4h5v-2h-5v2Zm-.707-.293 6 6 1.414-1.414-6-6-1.414 1.414ZM14 4v5h2V4h-2Zm1 6h5V8h-5v2Zm.707-.293 6-6-1.414-1.414-6 6 1.414 1.414ZM10 20v-5H8v5h2Zm-1-6H4v2h5v-2Zm-.707.293-6 6 1.414 1.414 6-6-1.414-1.414ZM8 4v5h2V4H8Zm1 4H4v2h5V8Zm.707.293-6-6-1.414 1.414 6 6 1.414-1.414Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "reduce",
} as DefineComponent;
</script>
