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
            d="m12 20 .707.707-.707.707-.707-.707L12 20Zm5.707-4.293-5 5-1.414-1.414 5-5 1.414 1.414Zm-6.414 5-5-5 1.414-1.414 5 5-1.414 1.414ZM12 4l.707-.707L12 2.586l-.707.707L12 4Zm5.707 4.293-5-5-1.414 1.414 5 5 1.414-1.414Zm-6.414-5-5 5 1.414 1.414 5-5-1.414-1.414Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "move",
} as DefineComponent;
</script>
