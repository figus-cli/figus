<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="10" cy="8" r="5" fill="currentColor" />
        <path stroke="currentColor" stroke-width="2" d="M19 10v6m3-3h-6" />
        <path
            fill="currentColor"
            d="M17.142 20.383c.462-.105.739-.585.534-1.012-.552-1.15-1.459-2.162-2.634-2.924C13.595 15.508 11.823 15 10 15s-3.595.508-5.042 1.446c-1.175.763-2.082 1.774-2.634 2.925-.205.427.072.907.534 1.012a32.333 32.333 0 0 0 14.284 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAddAltFill",
} as DefineComponent;
</script>
