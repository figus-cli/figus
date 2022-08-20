<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="18" cy="7" r="1" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M4.037 17.5h10.927a.8.8 0 0 0 .655-1.259l-5.464-7.805a.8.8 0 0 0-1.31 0L3.38 16.241a.8.8 0 0 0 .656 1.259Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M10.5 17.5h8.557a.8.8 0 0 0 .678-1.224l-3.557-5.69a.8.8 0 0 0-1.356 0l-1.46 2.335"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgAlt",
} as DefineComponent;
</script>
