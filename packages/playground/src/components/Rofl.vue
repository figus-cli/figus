<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <path stroke="currentColor" stroke-width="2" d="m16 8-8 3m0-3 8 3" />
        <path
            fill="currentColor"
            d="M8 14.556c0-.052 0-.078.002-.1a.5.5 0 0 1 .454-.454c.022-.002.048-.002.1-.002h6.888c.052 0 .078 0 .1.002a.5.5 0 0 1 .454.454c.002.022.002.048.002.1V15a4 4 0 0 1-8 0v-.444Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "rofl",
} as DefineComponent;
</script>
