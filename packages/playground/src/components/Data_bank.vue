<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M6 14h12a3 3 0 1 1 0 6H6a3 3 0 1 1 0-6Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M3 17c0-1.41 1.491-7.294 2.371-10.642.22-.835.329-1.252.571-1.57a2.014 2.014 0 0 1 .823-.635C7.134 4 7.57 4 8.445 4h7.11c.875 0 1.312 0 1.68.153.323.135.611.357.823.635.242.318.352.735.571 1.57C19.51 9.706 21 15.59 21 17"
        />
        <rect width="2" height="2" x="17" y="16" fill="currentColor" rx="1" />
        <rect width="4" height="2" x="5" y="16" fill="currentColor" rx="1" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "dataBank",
} as DefineComponent;
</script>
