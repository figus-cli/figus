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
            d="M7 8V7H6v1h1Zm3 1a1 1 0 1 0 0-2v2Zm-4 2a1 1 0 1 0 2 0H6Zm5 5a1 1 0 1 0 2 0h-2Zm.121-3.879-.707.707.707-.707Zm.707-.707-4.12-4.121-1.415 1.414 4.121 4.121 1.414-1.414ZM7 9h3V7H7v2ZM6 8v3h2V8H6Zm5 6.243V16h2v-1.757h-2Zm-.586-1.415A2 2 0 0 1 11 14.243h2a4 4 0 0 0-1.172-2.829l-1.414 1.414Z"
        />
        <path
            fill="currentColor"
            d="M17 8V7h1v1h-1Zm-3 1a1 1 0 1 1 0-2v2Zm4 2a1 1 0 1 1-2 0h2Zm-5 5a1 1 0 1 1-2 0h2Zm-.121-3.879.707.707-.707-.707Zm-.707-.707 4.12-4.121 1.415 1.414-4.121 4.121-1.414-1.414ZM17 9h-3V7h3v2Zm1-1v3h-2V8h2Zm-5 6.243V16h-2v-1.757h2Zm.586-1.415A2 2 0 0 0 13 14.243h-2a4 4 0 0 1 1.172-2.829l1.414 1.414Z"
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
    name: "direction",
} as DefineComponent;
</script>
