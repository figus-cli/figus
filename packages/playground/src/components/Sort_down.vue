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
            d="M5 7h8m-8 5h6m-6 5h4"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m19 18 3-3m-3 3-3-3m3 3V6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortDown",
} as DefineComponent;
</script>
