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
            d="M4.5 7.5h10m-10 4h7m-7 4h5"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="m17.5 9.5 2 2m-2-2-2 2m2-2v6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortUpAlt",
} as DefineComponent;
</script>
