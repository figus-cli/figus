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
            d="m12 6 .707-.707L12 4.586l-.707.707L12 6Zm-1 12a1 1 0 1 0 2 0h-2Zm5.707-8.707-4-4-1.414 1.414 4 4 1.414-1.414Zm-5.414-4-4 4 1.414 1.414 4-4-1.414-1.414ZM11 6v12h2V6h-2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowAltLtop",
} as DefineComponent;
</script>
