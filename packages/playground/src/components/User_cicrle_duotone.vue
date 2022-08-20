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
            fill-opacity=".24"
            d="M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0Z"
        />
        <circle cx="12" cy="10" r="4" fill="currentColor" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M18.22 18.246a.239.239 0 0 1-.04.297A8.969 8.969 0 0 1 12 21a8.969 8.969 0 0 1-6.18-2.457.239.239 0 0 1-.04-.297C6.942 16.318 9.291 15 12 15c2.708 0 5.057 1.318 6.22 3.246Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userCicrleDuotone",
} as DefineComponent;
</script>
