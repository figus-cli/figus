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
            d="m8 20-.707.707.707.707.707-.707L8 20Zm2-15a1 1 0 1 0 0-2v2ZM3.293 16.707l4 4 1.414-1.414-4-4-1.414 1.414Zm5.414 4 4-4-1.414-1.414-4 4 1.414 1.414ZM9 20V6H7v14h2ZM9 6a1 1 0 0 1 1-1V3a3 3 0 0 0-3 3h2Zm7-2-.707-.707.707-.707.707.707L16 4Zm0 15h1-1Zm-2 3a1 1 0 1 1 0-2v2ZM11.293 7.293l4-4 1.414 1.414-4 4-1.414-1.414Zm5.414-4 4 4-1.414 1.414-4-4 1.414-1.414ZM17 4v15h-2V4h2Zm0 15a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "verticalSwitch",
} as DefineComponent;
</script>
