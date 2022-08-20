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
            d="m6 21-.189-3.025C5.371 10.944 10.955 5 18 5l-1.458 1.166A9.438 9.438 0 0 0 13 13.536c0 2.175-2.155 3.694-4.204 2.963L6 15.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "editLight",
} as DefineComponent;
</script>
