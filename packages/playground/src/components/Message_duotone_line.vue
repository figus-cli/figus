<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="16"
            height="12"
            x="4"
            y="6"
            stroke="currentColor"
            stroke-width="1.2"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="m4 9 7.106 3.553a2 2 0 0 0 1.788 0L20 9"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
            d="m11.374 12.016-6.08-3.04A1.254 1.254 0 0 1 4.6 7.854c0-.692.562-1.254 1.254-1.254h12.292a1.254 1.254 0 0 1 .56 2.376l-6.08 3.04a1.4 1.4 0 0 1-1.252 0Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "messageDuotoneLine",
} as DefineComponent;
</script>
