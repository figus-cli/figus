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
            d="M11.5 13.8h-1.063c-1.53 0-2.294 0-2.583-.497-.29-.497.088-1.162.844-2.491l2.367-4.167c.375-.66.563-.99.749-.94.186.048.186.428.186 1.187V9.7c0 .236 0 .354.073.427.073.073.191.073.427.073h1.063c1.53 0 2.294 0 2.583.497.29.497-.088 1.162-.844 2.491l-2.367 4.167c-.375.66-.563.99-.749.94C12 18.247 12 17.868 12 17.109V14.3c0-.236 0-.354-.073-.427-.073-.073-.191-.073-.427-.073Z"
        />
        <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lightningRing",
} as DefineComponent;
</script>
