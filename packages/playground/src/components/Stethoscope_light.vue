<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="18.5" cy="10.5" r="2" stroke="currentColor" />
        <circle cx="18.5" cy="10.5" r=".5" fill="currentColor" />
        <circle cx="8.5" cy="13.5" r="1.5" fill="currentColor" />
        <path
            stroke="currentColor"
            d="M8.5 13.5c3.594 0 4.766-4.843 4.967-8.002.035-.551-.415-.998-.967-.998h-1m-3 9c-3.594 0-4.766-4.843-4.967-8.002-.035-.551.415-.998.967-.998h1"
        />
        <path stroke="currentColor" d="M18.5 12.5v2a5 5 0 0 1-10 0v-1" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "stethoscopeLight",
} as DefineComponent;
</script>
