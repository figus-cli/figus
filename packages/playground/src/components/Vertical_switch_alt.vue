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
            d="m8 20-.707.707.707.707.707-.707L8 20Zm0-8H7h1Zm2-1a1 1 0 1 0 0-2v2Zm-6.707 5.707 4 4 1.414-1.414-4-4-1.414 1.414Zm5.414 4 4-4-1.414-1.414-4 4 1.414 1.414ZM9 20v-8H7v8h2Zm0-8a1 1 0 0 1 1-1V9a3 3 0 0 0-3 3h2Zm7-8-.707-.707.707-.707.707.707L16 4Zm0 8h1-1Zm-2 3a1 1 0 1 1 0-2v2Zm-2.707-7.707 4-4 1.414 1.414-4 4-1.414-1.414Zm5.414-4 4 4-1.414 1.414-4-4 1.414-1.414ZM17 4v8h-2V4h2Zm0 8a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "verticalSwitchAlt",
} as DefineComponent;
</script>
