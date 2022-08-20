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
            d="M3 9.854C3 8.83 3.83 8 4.854 8a1.854 1.854 0 0 0 1.658-1.025l.821-1.642c.11-.22.165-.33.228-.425a2 2 0 0 1 1.448-.895C9.121 4 9.245 4 9.49 4h5.018c.246 0 .37 0 .482.013a2 2 0 0 1 1.448.895c.063.095.118.205.228.425l.82 1.642A1.854 1.854 0 0 0 19.146 8C20.17 8 21 8.83 21 9.854v5.003c0 2.005 0 3.007-.46 3.74a3 3 0 0 1-.944.943c-.732.46-1.734.46-3.739.46H8.143c-2.005 0-3.007 0-3.74-.46a3 3 0 0 1-.943-.944C3 17.864 3 16.862 3 14.857V9.854Z"
        />
        <circle cx="12" cy="13" r="3" stroke="currentColor" stroke-width="2" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "camera",
} as DefineComponent;
</script>
