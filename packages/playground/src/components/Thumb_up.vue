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
            d="M6 20h2.85v-2H6v2Zm4-1.15v-7.7H8v7.7h2ZM8.85 10H6v2h2.85v-2ZM4 12v6h2v-6H4Zm2-2a2 2 0 0 0-2 2h2v-2Zm4 1.15A1.15 1.15 0 0 0 8.85 10v2a.85.85 0 0 1-.85-.85h2ZM8.85 20A1.15 1.15 0 0 0 10 18.85H8a.85.85 0 0 1 .85-.85v2ZM6 18H4a2 2 0 0 0 2 2v-2Z"
        />
        <path
            fill="currentColor"
            d="M8.168 10.445a1 1 0 1 0 1.664 1.11l-1.664-1.11ZM14 11a1 1 0 1 0 2 0h-2Zm-4.168.555 1.832-2.748L10 7.697l-1.832 2.748 1.664 1.11ZM12 7.697V5h-2v2.697h2ZM12 5h1V3h-1v2Zm2 1v5h2V6h-2Zm-1-1a1 1 0 0 1 1 1h2a3 3 0 0 0-3-3v2Zm-1 0V3a2 2 0 0 0-2 2h2Zm-.336 3.807A2 2 0 0 0 12 7.697h-2l1.664 1.11Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M13 11h4.766a2 2 0 0 1 1.987 2.22l-.555 5A2 2 0 0 1 17.21 20h-3.796a1 1 0 0 1-.707-.293l-.414-.414a1 1 0 0 0-.707-.293H9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "thumbUp",
} as DefineComponent;
</script>
