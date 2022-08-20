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
            d="m12 13-.707.707.707.707.707-.707L12 13ZM5.293 7.707l6 6 1.414-1.414-6-6-1.414 1.414Zm7.414 6 6-6-1.414-1.414-6 6 1.414 1.414Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M17 18H7" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "expandDownStop",
} as DefineComponent;
</script>
