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
            d="m12 4-.707-.707.707-.707.707.707L12 4Zm1 15a1 1 0 1 1-2 0h2ZM5.293 9.293l6-6 1.414 1.414-6 6-1.414-1.414Zm7.414-6 6 6-1.414 1.414-6-6 1.414-1.414ZM13 4v15h-2V4h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowTop",
} as DefineComponent;
</script>
