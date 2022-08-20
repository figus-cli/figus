<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M3 9v6c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9"
        />
        <path
            fill="currentColor"
            d="M15 15v1h1v-1h-1ZM7.707 6.293a1 1 0 0 0-1.414 1.414l1.414-1.414ZM14 8v7h2V8h-2Zm1 6H8v2h7v-2Zm.707.293-8-8-1.414 1.414 8 8 1.414-1.414Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "in",
} as DefineComponent;
</script>
