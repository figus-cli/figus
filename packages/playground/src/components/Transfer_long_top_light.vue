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
            d="M10 22V10H6.435a.2.2 0 0 1-.152-.33L12 3l5.717 6.67a.2.2 0 0 1-.152.33H14v12"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transferLongTopLight",
} as DefineComponent;
</script>
