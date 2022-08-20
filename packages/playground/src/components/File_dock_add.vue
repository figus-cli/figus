<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M9 13h6M9 9h4m-4 8h4"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M19 13v2c0 2.828 0 4.243-.879 5.121C17.243 21 15.828 21 13 21h-2c-2.828 0-4.243 0-5.121-.879C5 19.243 5 17.828 5 15V9c0-2.828 0-4.243.879-5.121C6.757 3 8.172 3 11 3"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M18 3v6m3-3h-6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDockAdd",
} as DefineComponent;
</script>
