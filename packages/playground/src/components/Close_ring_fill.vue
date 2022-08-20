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
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1.293-6.293a1 1 0 0 0 1.414-1.414L13.414 12l1.293-1.293a1 1 0 0 0-1.414-1.414L12 10.586l-1.293-1.293a1 1 0 0 0-1.414 1.414L10.586 12l-1.293 1.293a1 1 0 0 0 1.414 1.414L12 13.414l1.293 1.293Zm1.386-9.174A7 7 0 0 0 7.05 16.95a1 1 0 1 0 1.414-1.414 5 5 0 0 1-.621-6.314A5 5 0 1 1 12 17a1 1 0 1 0 0 2 7 7 0 0 0 2.679-13.467Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "closeRingFill",
} as DefineComponent;
</script>
