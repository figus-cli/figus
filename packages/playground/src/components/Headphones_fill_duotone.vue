<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="4"
            height="7"
            x="16"
            y="12"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            rx="2"
        />
        <rect
            width="4"
            height="7"
            x="4"
            y="12"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            rx="2"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="M4 13v3m16-3v3m0-3c0-2.387-.843-4.676-2.343-6.364C16.157 4.948 14.122 4 12 4s-4.157.948-5.657 2.636C4.843 8.324 4 10.613 4 13"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "headphonesFillDuotone",
} as DefineComponent;
</script>
