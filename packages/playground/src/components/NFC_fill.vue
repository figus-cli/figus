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
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10ZM8.669 7.938a.6.6 0 0 0-.297-.458.597.597 0 0 0-.336-.079.597.597 0 0 0-.354.09.6.6 0 0 0-.281.483 8.6 8.6 0 0 0 .151 8.326.6.6 0 1 0 1.04-.6 7.4 7.4 0 0 1-.484-6.395l4.223 6.757a.6.6 0 0 0 .297.458.598.598 0 0 0 .336.079.597.597 0 0 0 .354-.09.6.6 0 0 0 .281-.483 8.6 8.6 0 0 0-.151-8.326.6.6 0 1 0-1.04.6 7.4 7.4 0 0 1 .484 6.395L8.669 7.938ZM16.007 6.8a.6.6 0 1 1 1.039-.6 11.6 11.6 0 0 1 0 11.6.6.6 0 1 1-1.04-.6 10.4 10.4 0 0 0 0-10.4Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "nfcFill",
} as DefineComponent;
</script>
