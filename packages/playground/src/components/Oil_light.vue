<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="m18 8-5 3-2-2H7m11-1 3 3m-3-3-4 7H3V9h4m0 0V4m0 0H4m3 0h3M3 21l1.5-1.5c.08-.08.12-.12.155-.151a2 2 0 0 1 2.69 0c.036.032.075.071.155.151l.148.148a1.911 1.911 0 0 0 2.704 0l.373-.373c.66-.66 1.758-.551 2.275.225a1.478 1.478 0 0 0 2.275.225l.373-.374a1.911 1.911 0 0 1 2.703 0L20 21"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "oilLight",
} as DefineComponent;
</script>
