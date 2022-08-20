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
            d="m17.5 9 .8-.6.45.6-.45.6-.8-.6Zm-2.3-1.4a1 1 0 0 1 1.6-1.2l-1.6 1.2Zm1.6 4a1 1 0 0 1-1.6-1.2l1.6 1.2ZM13 16a1 1 0 1 1-2 0h2Zm2-8h2.5v2H15V8Zm1.7 1.6-1.5-2 1.6-1.2 1.5 2-1.6 1.2Zm1.6 0-1.5 2-1.6-1.2 1.5-2 1.6 1.2ZM13 12v4h-2v-4h2Zm2-2a2 2 0 0 0-2 2h-2a4 4 0 0 1 4-4v2Z"
        />
        <path
            fill="currentColor"
            d="m6.5 9-.8-.6-.45.6.45.6.8-.6Zm2.3-1.4a1 1 0 0 0-1.6-1.2l1.6 1.2Zm-1.6 4a1 1 0 0 0 1.6-1.2l-1.6 1.2ZM11 16a1 1 0 1 0 2 0h-2ZM9 8H6.5v2H9V8ZM7.3 9.6l1.5-2-1.6-1.2-1.5 2 1.6 1.2Zm-1.6 0 1.5 2 1.6-1.2-1.5-2-1.6 1.2ZM11 12v4h2v-4h-2Zm-2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "directionAlt",
} as DefineComponent;
</script>
