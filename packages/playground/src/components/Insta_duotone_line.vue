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
            fill-rule="evenodd"
            d="M4.172 4.172C3 5.343 3 7.229 3 11v2c0 3.771 0 5.657 1.172 6.828C5.343 21 7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172C21 18.657 21 16.771 21 13v-2c0-3.771 0-5.657-1.172-6.828C18.657 3 16.771 3 13 3h-2C7.229 3 5.343 3 4.172 4.172ZM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M3 11c0-3.771 0-5.657 1.172-6.828C5.343 3 7.229 3 11 3h2c3.771 0 5.657 0 6.828 1.172C21 5.343 21 7.229 21 11v2c0 3.771 0 5.657-1.172 6.828C18.657 21 16.771 21 13 21h-2c-3.771 0-5.657 0-6.828-1.172C3 18.657 3 16.771 3 13v-2Z"
        />
        <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
        <circle
            cx="12"
            cy="12"
            r="3.4"
            stroke="currentColor"
            stroke-width="1.2"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "instaDuotoneLine",
} as DefineComponent;
</script>
