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
            d="m18 20-.707.707.707.707.707-.707L18 20ZM13 4a1 1 0 1 0 0 2V4Zm.293 12.707 4 4 1.414-1.414-4-4-1.414 1.414Zm5.414 4 4-4-1.414-1.414-4 4 1.414 1.414ZM19 20V9h-2v11h2ZM14 4h-1v2h1V4Zm5 5a5 5 0 0 0-5-5v2a3 3 0 0 1 3 3h2ZM6 4l.707-.707L6 2.586l-.707.707L6 4Zm5 16a1 1 0 1 0 0-2v2Zm-.293-12.707-4-4-1.414 1.414 4 4 1.414-1.414Zm-5.414-4-4 4 1.414 1.414 4-4-1.414-1.414ZM5 4v11h2V4H5Zm5 16h1v-2h-1v2Zm-5-5a5 5 0 0 0 5 5v-2a3 3 0 0 1-3-3H5Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "regroup",
} as DefineComponent;
</script>
