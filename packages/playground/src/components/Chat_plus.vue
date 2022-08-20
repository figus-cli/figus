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
            stroke-width="2"
            d="M12 4a8 8 0 0 1 8 8v5.09c0 .848 0 1.27-.126 1.609a2 2 0 0 1-1.175 1.175C18.36 20 17.937 20 17.09 20H12a8 8 0 0 1-8-8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 11h6M5 8V2M2 5h6m4 10h3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatPlus",
} as DefineComponent;
</script>
