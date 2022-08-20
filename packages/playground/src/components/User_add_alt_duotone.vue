<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="10" cy="10" r="4" fill="currentColor" fill-opacity=".24" />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M16.221 18.246a.239.239 0 0 1-.041.297A8.97 8.97 0 0 1 10 21a8.969 8.969 0 0 1-6.18-2.457.239.239 0 0 1-.04-.297C4.942 16.318 7.291 15 10 15c2.708 0 5.057 1.318 6.221 3.246Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" d="M18.5 10.5v6m-3-3h6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAddAltDuotone",
} as DefineComponent;
</script>
