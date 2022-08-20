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
            d="M21.95 11h-9.536l3.293-3.293-1.414-1.414-5 5-.707.707.707.707 5 5 1.414-1.414L12.414 13h9.537c-.502 5.053-4.766 9-9.951 9-5.523 0-10-4.477-10-10S6.477 2 12 2c5.185 0 9.449 3.947 9.95 9Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOut",
} as DefineComponent;
</script>
