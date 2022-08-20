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
            d="m20 12 .707-.707.707.707-.707.707L20 12ZM5 13a1 1 0 1 1 0-2v2Zm9.707-7.707 6 6-1.414 1.414-6-6 1.414-1.414Zm6 7.414-6 6-1.414-1.414 6-6 1.414 1.414ZM20 13H5v-2h15v2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowRight",
} as DefineComponent;
</script>
