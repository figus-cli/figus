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
            stroke="currentColor"
            stroke-width="1.4"
            d="M3 8c0-.943 0-1.414.293-1.707C3.586 6 4.057 6 5 6h10.93c.524 0 .786 0 1.007.118.22.119.366.337.657.773l2.666 4c.359.537.538.806.538 1.109 0 .303-.18.572-.538 1.11l-2.666 4c-.29.435-.436.653-.657.772-.221.118-.483.118-1.007.118H5c-.943 0-1.414 0-1.707-.293C3 17.414 3 16.943 3 16V8Z"
        />
        <circle
            cx="15"
            cy="12"
            r="1"
            fill="currentColor"
            stroke="currentColor"
            stroke-width="1.4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lableDuotone",
} as DefineComponent;
</script>
