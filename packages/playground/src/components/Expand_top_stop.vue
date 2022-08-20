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
            d="m12 11 .707-.707L12 9.586l-.707.707L12 11Zm6.707 5.293-6-6-1.414 1.414 6 6 1.414-1.414Zm-7.414-6-6 6 1.414 1.414 6-6-1.414-1.414Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M7 6h10" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandTopStop",
} as DefineComponent;
</script>
