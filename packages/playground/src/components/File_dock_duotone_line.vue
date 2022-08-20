<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="11"
            height="13"
            x="5"
            y="8"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M8 14h6m-6-3h4m-4 6h4m7-4v2c0 2.828 0 4.243-.879 5.121C17.243 21 15.828 21 13 21h-2c-2.828 0-4.243 0-5.121-.879C5 19.243 5 17.828 5 15V9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3h1m6 0v6m3-3h-6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDockDuotoneLine",
} as DefineComponent;
</script>
