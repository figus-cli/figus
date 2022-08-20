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
            d="m10 4 .707-.707L10 2.586l-.707.707L10 4Zm8 17a1 1 0 1 0 0-2v2ZM15.707 8.293l-5-5-1.414 1.414 5 5 1.414-1.414Zm-6.414-5-5 5 1.414 1.414 5-5-1.414-1.414ZM9 4v10h2V4H9Zm7 17h2v-2h-2v2Zm-7-7a7 7 0 0 0 7 7v-2a5 5 0 0 1-5-5H9Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "up",
} as DefineComponent;
</script>
