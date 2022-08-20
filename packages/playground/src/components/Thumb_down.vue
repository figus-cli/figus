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
            d="M6 4h2.85v2H6V4Zm4 1.15v7.7H8v-7.7h2ZM8.85 14H6v-2h2.85v2ZM4 12V6h2v6H4Zm2 2a2 2 0 0 1-2-2h2v2Zm4-1.15A1.15 1.15 0 0 1 8.85 14v-2a.85.85 0 0 0-.85.85h2ZM8.85 4C9.485 4 10 4.515 10 5.15H8a.85.85 0 0 0 .85.85V4ZM6 6H4a2 2 0 0 1 2-2v2Z"
        />
        <path
            fill="currentColor"
            d="M8.168 13.555a1 1 0 1 1 1.664-1.11l-1.664 1.11ZM14 13a1 1 0 1 1 2 0h-2Zm-4.168-.555 1.832 2.748L10 16.303l-1.832-2.748 1.664-1.11ZM12 16.303V19h-2v-2.697h2ZM12 19h1v2h-1v-2Zm2-1v-5h2v5h-2Zm-1 1a1 1 0 0 0 1-1h2a3 3 0 0 1-3 3v-2Zm-1 0v2a2 2 0 0 1-2-2h2Zm-.336-3.807a2 2 0 0 1 .336 1.11h-2l1.664-1.11Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M13 13h4.766a2 2 0 0 0 1.987-2.22l-.555-5A2 2 0 0 0 17.21 4h-3.796a1 1 0 0 0-.707.293l-.414.414a1 1 0 0 1-.707.293H9"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "thumbDown",
} as DefineComponent;
</script>
