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
            stroke-opacity=".24"
            d="M6.697 17.303A7.5 7.5 0 0 1 7.833 5.764a7.5 7.5 0 0 1 9.47 11.54"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="m12 12 4-2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "speedAltDuotoneLine",
} as DefineComponent;
</script>
