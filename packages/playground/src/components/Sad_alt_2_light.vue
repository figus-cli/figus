<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
        <path
            stroke="currentColor"
            d="M8.43 16.761c.385-.083.916-.148 1.534-.193A28.843 28.843 0 0 1 12 16.5c.712 0 1.414.023 2.036.068.618.045 1.15.11 1.534.193"
        />
        <path
            fill="currentColor"
            stroke="currentColor"
            d="M9.5 10c.24 0 .36 0 .433.122.073.123.03.201-.055.357a1 1 0 0 1-1.756 0c-.085-.156-.128-.234-.055-.356C8.14 10 8.26 10 8.5 10h1Zm6 0c.24 0 .36 0 .433.122.073.123.03.201-.055.357A1 1 0 0 1 15 11a1 1 0 0 1-.878-.52c-.085-.157-.128-.235-.055-.358C14.14 10 14.26 10 14.5 10h1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sadAlt_2Light",
} as DefineComponent;
</script>
