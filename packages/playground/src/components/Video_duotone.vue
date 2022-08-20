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
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM9.737 7.869l6.474 3.237a1 1 0 0 1 0 1.789l-6.474 3.237A1.2 1.2 0 0 1 8 15.058V8.943a1.2 1.2 0 0 1 1.737-1.073Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="M16.211 11.106 9.737 7.868A1.2 1.2 0 0 0 8 8.942v6.116a1.2 1.2 0 0 0 1.737 1.074l6.474-3.238a1 1 0 0 0 0-1.788Z"
        />
        <circle
            cx="12"
            cy="12"
            r="9"
            stroke="currentColor"
            stroke-width="1.2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "videoDuotone",
} as DefineComponent;
</script>
