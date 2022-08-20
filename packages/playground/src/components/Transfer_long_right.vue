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
            d="M2 10h12V6.435a.2.2 0 0 1 .33-.152L21 12l-6.67 5.717a.2.2 0 0 1-.33-.152V14H2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transferLongRight",
} as DefineComponent;
</script>
