<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" d="M9 5h5m0 0h5m-5 0v14m-5 0h5m0 0h5" />
        <path
            fill="currentColor"
            d="M2 15h-.5v.5H2V15Zm0 .5h9v-1H2v1Zm9-7H4v1h7v-1ZM1.5 11v4h1v-4h-1ZM4 8.5A2.5 2.5 0 0 0 1.5 11h1A1.5 1.5 0 0 1 4 9.5v-1ZM22 9h.5v-.5H22V9Zm0-.5h-5v1h5v-1Zm-5 7h3v-1h-3v1Zm5.5-2.5V9h-1v4h1ZM20 15.5a2.5 2.5 0 0 0 2.5-2.5h-1a1.5 1.5 0 0 1-1.5 1.5v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "renameLight",
} as DefineComponent;
</script>
