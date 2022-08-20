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
            stroke-width="1.2"
            d="M16.04 6.384a.6.6 0 0 0 .46.216h2.3c.57 0 .961 0 1.265.025.296.024.455.069.57.128a1.4 1.4 0 0 1 .612.611c.06.116.104.275.128.571.025.304.025.695.025 1.265v2.6c0 .57 0 .961-.025 1.265-.024.296-.069.455-.128.57a1.4 1.4 0 0 1-.611.612c-.116.06-.275.103-.571.128-.304.024-.695.025-1.265.025h-7.6c-.57 0-.961 0-1.265-.025-.296-.025-.455-.069-.57-.128a1.4 1.4 0 0 1-.612-.611c-.06-.116-.103-.275-.128-.571-.024-.304-.025-.695-.025-1.265V6.2c0-.57 0-.961.025-1.265.024-.296.069-.455.128-.57a1.4 1.4 0 0 1 .611-.612c.116-.06.275-.104.571-.128.304-.025.695-.025 1.265-.025h1.301c.584 0 .765.005.926.048a1.402 1.402 0 0 1 .442.207c.136.096.256.232.63.68l1.54 1.85Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="1.414"
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M6 7H5a2 2 0 0 0-2 2v1m3 10H5a2 2 0 0 1-2-2v-1m10 3h1a2 2 0 0 0 2-2v-1m-5 3H8m-5-8v3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderCopyDuotoneLine",
} as DefineComponent;
</script>
