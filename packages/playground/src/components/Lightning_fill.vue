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
            fill-rule="evenodd"
            d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm-1.87-8.2h1.37c.236 0 .354 0 .427.073.073.073.073.191.073.427v4.43c0 .89 0 1.336.196 1.38.196.042.383-.362.758-1.17l2.731-5.9c.592-1.278.888-1.917.593-2.378-.295-.462-1-.462-2.408-.462H12.5c-.236 0-.354 0-.427-.073C12 10.054 12 9.936 12 9.7V5.27c0-.89 0-1.336-.196-1.38-.196-.042-.383.362-.758 1.17l-2.731 5.9c-.592 1.278-.888 1.917-.593 2.379.295.461 1 .461 2.408.461Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lightningFill",
} as DefineComponent;
</script>
