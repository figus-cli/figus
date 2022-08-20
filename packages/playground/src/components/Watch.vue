<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="6" stroke="currentColor" stroke-width="2" />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="m8.5 7 .407-3.255A.85.85 0 0 1 9.75 3h4.5a.85.85 0 0 1 .843.745L15.5 7m-7 10 .407 3.255A.85.85 0 0 0 9.75 21h4.5a.85.85 0 0 0 .843-.745L15.5 17"
        />
        <path
            fill="currentColor"
            d="M18.15 11h-.65v2h.65a.85.85 0 0 0 .85-.85v-.3a.85.85 0 0 0-.85-.85Z"
        />
        <path stroke="currentColor" stroke-width="2" d="m12 12-1-3m1 3 2.5 1" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "watch",
} as DefineComponent;
</script>
