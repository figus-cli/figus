<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="12"
            height="18"
            x="6"
            y="3"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M9 3c0 .465 0 .698.051.888a1.5 1.5 0 0 0 1.06 1.06C10.303 5 10.536 5 11 5h2c.465 0 .698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C15 3.696 15 3.464 15 3"
        />
        <circle cx="12" cy="18" r="1" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "phoneDuotoneLine",
} as DefineComponent;
</script>
