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
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M3.879 3.879C3 4.757 3 6.172 3 9v6c0 2.828 0 4.243.879 5.121.642.642 1.57.815 3.125.862C7 20.687 7 20.36 7 20v-1c0-1.886 0-2.828.586-3.414C8.172 15 9.114 15 11 15h1c1.886 0 2.828 0 3.414.586C16 16.172 16 17.114 16 19v1c0 .367 0 .698-.004.998 2.177-.012 3.356-.108 4.125-.877C21 19.243 21 17.828 21 15V7.828c0-.408 0-.613-.076-.797-.076-.183-.22-.328-.51-.617l-2.828-2.828c-.29-.29-.434-.434-.617-.51C16.785 3 16.58 3 16.172 3H9c-2.828 0-4.243 0-5.121.879Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M16 21v-2c0-1.886 0-2.828-.586-3.414C14.828 15 13.886 15 12 15h-1c-1.886 0-2.828 0-3.414.586C7 16.172 7 17.114 7 19v2"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M7 8h5" />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M3 9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h7.172c.408 0 .613 0 .796.076.184.076.329.22.618.51l2.828 2.828c.29.29.434.434.51.617.076.184.076.389.076.797V15c0 2.828 0 4.243-.879 5.121C19.243 21 17.828 21 15 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "saveDuotone",
} as DefineComponent;
</script>
