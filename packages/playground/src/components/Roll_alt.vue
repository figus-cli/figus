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
            stroke-width="2"
            d="M5 16c.71 0 1.1-.551 1.25-.805.19-.322.326-.72.427-1.124C6.883 13.247 7 12.161 7 11c0-1.162-.117-2.247-.323-3.071-.1-.404-.237-.802-.427-1.123C6.1 6.55 5.71 6 5 6s-1.1.551-1.25.805c-.19.322-.326.72-.427 1.124C3.117 8.753 3 9.839 3 11c0 1.162.117 2.247.323 3.071.1.404.237.802.427 1.123.15.255.54.806 1.25.806Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M19 16c.693 0 1.082-.528 1.239-.788.193-.32.333-.721.438-1.141.213-.853.323-1.956.323-3.071 0-1.115-.11-2.218-.323-3.071-.105-.42-.245-.821-.438-1.141C20.082 6.528 19.693 6 19 6m0 0s-3.063 1-7 1-7-1-7-1m0 10s1.441-.764 4.5-1m9.5 1s-1.441-.764-4.5-1M10 8v2m4-2v2"
        />
        <circle cx="12" cy="13" r="3" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9.5 15 6 18l2 .5L9.5 20l2.5-4 2.5 4 1.5-1.5 2-.5-3.5-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "rollAlt",
} as DefineComponent;
</script>
