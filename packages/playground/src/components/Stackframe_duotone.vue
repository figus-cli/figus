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
            stroke="currentColor"
            stroke-width="1.2"
            d="M5 8c0-.943 0-1.414.293-1.707C5.586 6 6.057 6 7 6h6.063c.46 0 .691 0 .893.094s.349.272.644.626l3.333 4c.51.612.765.918.765 1.28s-.255.668-.765 1.28l-3.333 4c-.295.354-.443.531-.644.626-.202.094-.432.094-.893.094H7c-.943 0-1.414 0-1.707-.293C5 17.414 5 16.943 5 16V8Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "stackframeDuotone",
} as DefineComponent;
</script>
