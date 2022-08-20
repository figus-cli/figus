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
            d="M3 6a2 2 0 0 1 2-2h14.5a.5.5 0 0 1 .5.5V6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            d="M3 16V6a2 2 0 0 0 2 2h14a2 2 0 0 1 2 2v2.85a.15.15 0 0 1-.15.15H18a2 2 0 1 0 0 4h2.85a.15.15 0 0 1 .15.15V18a2 2 0 0 1-2 2H7a4 4 0 0 1-4-4Z"
        />
        <path
            fill="currentColor"
            d="M15 15a2 2 0 0 1 2-2h3.85a.15.15 0 0 1 .15.15v3.7a.15.15 0 0 1-.15.15H17a2 2 0 0 1-2-2Z"
        />
        <rect width="6" height="1" x="5" y="10" fill="currentColor" rx=".5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "walletDuotone",
} as DefineComponent;
</script>
