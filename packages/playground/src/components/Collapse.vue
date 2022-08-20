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
            d="m9 13-.707-.707.707-.707.707.707L9 13Zm1 9a1 1 0 1 1-2 0h2Zm-6.707-4.707 5-5 1.414 1.414-5 5-1.414-1.414Zm6.414-5 5 5-1.414 1.414-5-5 1.414-1.414ZM10 13v9H8v-9h2Zm5-2-.707.707.707.707.707-.707L15 11Zm1-9a1 1 0 1 0-2 0h2ZM9.293 6.707l5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM16 11V2h-2v9h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "collapse",
} as DefineComponent;
</script>
