<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="2" />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M7.881 16.244c.493-.427 1.142-.735 1.842-.937A8.307 8.307 0 0 1 12 15c.786 0 1.57.103 2.277.307.7.202 1.35.51 1.842.937M17 8l-3 2M7 8l3 2"
        />
        <circle
            cx="8"
            cy="10"
            r="1.25"
            fill="currentColor"
            stroke="currentColor"
            stroke-width=".5"
        />
        <circle
            cx="16"
            cy="10"
            r="1.25"
            fill="currentColor"
            stroke="currentColor"
            stroke-width=".5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "angry",
} as DefineComponent;
</script>
