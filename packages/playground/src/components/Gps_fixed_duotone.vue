<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="3" fill="currentColor" />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M12 2.4a.6.6 0 0 1 .6.6v2a.708.708 0 0 1 0 .025 7.002 7.002 0 0 1 6.375 6.376h.012L19 11.4h2a.6.6 0 0 1 0 1.2h-2.025a7.002 7.002 0 0 1-6.376 6.375v.01L12.6 19v2a.6.6 0 1 1-1.2 0v-2.025a7.002 7.002 0 0 1-6.375-6.376A.708.708 0 0 1 5 12.6H3a.6.6 0 1 1 0-1.2h2.025A7.002 7.002 0 0 1 11.4 5.026a.708.708 0 0 1 0-.025V3a.6.6 0 0 1 .6-.6ZM12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "gpsFixedDuotone",
} as DefineComponent;
</script>
