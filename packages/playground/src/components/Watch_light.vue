<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="5.5" stroke="currentColor" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="m8.5 7.5.407-3.255A.85.85 0 0 1 9.75 3.5h4.5a.85.85 0 0 1 .843.745L15.5 7.5m-7 9 .407 3.255a.85.85 0 0 0 .843.745h4.5a.85.85 0 0 0 .843-.745L15.5 16.5"
        />
        <path
            fill="currentColor"
            d="M18.15 11h-.65v2h.65a.85.85 0 0 0 .85-.85v-.3a.85.85 0 0 0-.85-.85Z"
        />
        <path stroke="currentColor" d="m12 12-2-2.5m2 2.5 2.5.5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "watchLight",
} as DefineComponent;
</script>
