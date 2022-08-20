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
            d="m12 18-.707.707.707.707.707-.707L12 18Zm1-12a1 1 0 1 0-2 0h2Zm-5.707 8.707 4 4 1.414-1.414-4-4-1.414 1.414Zm5.414 4 4-4-1.414-1.414-4 4 1.414 1.414ZM13 18V6h-2v12h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowAltLdown",
} as DefineComponent;
</script>
