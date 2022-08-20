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
            fill-rule="evenodd"
            d="M5 2a1 1 0 0 0-1 1v2h16V3a1 1 0 0 0-1-1H5Zm14.782 5H4.218a2 2 0 0 0 .465.598l6 5.25a2 2 0 0 0 2.634 0l6-5.25A1.999 1.999 0 0 0 19.782 7Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M14 16.705V10h-4v8.705l4-2Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "filterAltFill",
} as DefineComponent;
</script>
