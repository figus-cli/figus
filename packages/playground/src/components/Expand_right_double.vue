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
            d="m18 12 .707.707.707-.707-.707-.707L18 12Zm-5.293 6.707 6-6-1.414-1.414-6 6 1.414 1.414Zm6-7.414-6-6-1.414 1.414 6 6 1.414-1.414ZM12 12l.707.707.707-.707-.707-.707L12 12Zm-5.293 6.707 6-6-1.414-1.414-6 6 1.414 1.414Zm6-7.414-6-6-1.414 1.414 6 6 1.414-1.414Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandRightDouble",
} as DefineComponent;
</script>
