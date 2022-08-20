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
            d="m11 12-.707-.707-.707.707.707.707L11 12Zm5.293-6.707-6 6 1.414 1.414 6-6-1.414-1.414Zm-6 7.414 6 6 1.414-1.414-6-6-1.414 1.414Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M6 7v10" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandLeftStop",
} as DefineComponent;
</script>
