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
            d="M10 2v12H6.435a.2.2 0 0 0-.152.33L12 21l5.717-6.67a.2.2 0 0 0-.152-.33H14V2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transferLongDown",
} as DefineComponent;
</script>
