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
            d="M5 7h7m-7 5h7m-7 5h7"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m19 20 3-3m-3 3-3-3m3 3V4m0 0-3 3m3-3 3 3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortList",
} as DefineComponent;
</script>
