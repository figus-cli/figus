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
            d="m8 20-.707.707.707.707.707-.707L8 20Zm6-15a1 1 0 1 0 0-2v2ZM3.293 16.707l4 4 1.414-1.414-4-4-1.414 1.414Zm5.414 4 4-4-1.414-1.414-4 4 1.414 1.414ZM9 20V8H7v12h2Zm3-15h2V3h-2v2ZM9 8a3 3 0 0 1 3-3V3a5 5 0 0 0-5 5h2Zm7 2-.707-.707.707-.707.707.707L16 10Zm0 8h1-1Zm-2 3a1 1 0 1 1 0-2v2Zm-2.707-7.707 4-4 1.414 1.414-4 4-1.414-1.414Zm5.414-4 4 4-1.414 1.414-4-4 1.414-1.414ZM17 10v8h-2v-8h2Zm0 8a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "verticalSwitchLong",
} as DefineComponent;
</script>
