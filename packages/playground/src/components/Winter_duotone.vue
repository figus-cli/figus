<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="12"
            cy="12"
            r="2.4"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M12 9V7m0-3v3m0 0L9 5m3 2 3-2m0 7h2m3 0h-3m0 0 2-3m-2 3 2 3m-7 0v2m0 3v-3m0 0-3 2m3-2 3 2m-6-7H7m-3 0h3m0 0L5 9m2 3-2 3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "winterDuotone",
} as DefineComponent;
</script>
