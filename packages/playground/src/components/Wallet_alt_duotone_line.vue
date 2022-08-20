<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path fill="currentColor" fill-opacity=".24" d="M15 12h6v4h-6z" />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M14.25 4h-4.5C6.568 4 4.977 4 3.989 5.004 3 6.008 3 7.624 3 10.857v2.286c0 3.232 0 4.849.989 5.853S6.568 20 9.75 20h4.5c3.182 0 4.773 0 5.761-1.004.989-1.004.989-2.62.989-5.853v-2.286c0-3.232 0-4.849-.989-5.853S17.433 4 14.25 4Z"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M7 8h3" />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M19 16h-2c-.943 0-1.414 0-1.707-.293C15 15.414 15 14.943 15 14c0-.943 0-1.414.293-1.707C15.586 12 16.057 12 17 12h2c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C20.414 16 19.943 16 19 16Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "walletAltDuotoneLine",
} as DefineComponent;
</script>
