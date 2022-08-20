<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="18" cy="7" r="1.5" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M5.037 17.5h10.927a.8.8 0 0 0 .655-1.259l-5.464-7.805a.8.8 0 0 0-1.31 0L4.38 16.241a.8.8 0 0 0 .655 1.259Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M10.5 17.5h8.557a.8.8 0 0 0 .678-1.224l-3.557-5.69a.8.8 0 0 0-1.356 0l-.963 1.539"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgAltLight",
} as DefineComponent;
</script>
