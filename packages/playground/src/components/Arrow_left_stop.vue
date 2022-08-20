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
            d="m10 12-.707-.707-.707.707.707.707L10 12Zm10 1a1 1 0 1 0 0-2v2Zm-4.707-7.707-6 6 1.414 1.414 6-6-1.414-1.414Zm-6 7.414 6 6 1.414-1.414-6-6-1.414 1.414ZM10 13h10v-2H10v2Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M4 5v14" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowLeftStop",
} as DefineComponent;
</script>
