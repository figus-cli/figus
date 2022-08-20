<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="18"
            height="18"
            x="3"
            y="3"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="m17 9-3.044 4.566a1 1 0 0 1-1.727-.107l-.458-.918a1 1 0 0 0-1.727-.107L7 17"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chartAltDuotoneLine",
} as DefineComponent;
</script>
