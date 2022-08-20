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
            d="m12 3-.707-.707.707-.707.707.707L12 3Zm1 11a1 1 0 1 1-2 0h2ZM6.293 7.293l5-5 1.414 1.414-5 5-1.414-1.414Zm6.414-5 5 5-1.414 1.414-5-5 1.414-1.414ZM13 3v11h-2V3h2Z"
        />
        <path
            fill="currentColor"
            d="m12 21-.707.707.707.707.707-.707L12 21Zm1-7a1 1 0 1 0-2 0h2Zm-6.707 2.707 5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM13 21v-7h-2v7h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fluid",
} as DefineComponent;
</script>
