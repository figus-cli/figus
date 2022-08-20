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
            d="m9.556 13.323-.12-.01c-1.528-.14-2.292-.209-2.534-.732-.243-.522.197-1.15 1.077-2.407l3.582-5.119c.581-.83.872-1.245 1.123-1.157.25.089.217.594.15 1.605l-.204 3.049c-.062.92-.092 1.38.172 1.69.265.31.724.351 1.642.435l.12.01c1.528.14 2.292.209 2.534.732.243.522-.197 1.15-1.077 2.407l-3.582 5.119c-.581.83-.872 1.245-1.123 1.157-.25-.089-.217-.594-.15-1.605l.204-3.049c.061-.92.092-1.38-.172-1.69-.265-.31-.724-.351-1.642-.435Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-opacity=".24"
            d="M18.5 4 17 6h2l-1.5 2m-11 8L5 18h2l-1.5 2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lightningDuotone",
} as DefineComponent;
</script>
