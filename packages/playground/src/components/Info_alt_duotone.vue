<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            r="8"
            fill="currentColor"
            fill-opacity=".24"
            transform="matrix(-1 0 0 1 12 12)"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "infoAltDuotone",
} as DefineComponent;
</script>
