<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="16"
            height="12"
            x="4"
            y="6"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            fill="currentColor"
            d="M4 16V9.243a.15.15 0 0 1 .217-.135l6.441 3.221a3 3 0 0 0 2.684 0l6.44-3.22a.15.15 0 0 1 .218.134V16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "messageAltDuotone",
} as DefineComponent;
</script>
