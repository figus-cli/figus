<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M15.5 10.5v8.002a3 3 0 0 1-6-.002v-8"
        />
        <path
            fill="currentColor"
            d="M15.5 8a.5.5 0 0 0 0 1V8Zm-4 1a.5.5 0 0 0 0-1v1Zm-3 2h8v-1h-8v1Zm8-3h-1v1h1V8Zm-5 0h-3v1h3V8ZM18 9.5A1.5 1.5 0 0 0 16.5 8v1a.5.5 0 0 1 .5.5h1ZM16.5 11A1.5 1.5 0 0 0 18 9.5h-1a.5.5 0 0 1-.5.5v1ZM7 9.5A1.5 1.5 0 0 0 8.5 11v-1a.5.5 0 0 1-.5-.5H7Zm1 0a.5.5 0 0 1 .5-.5V8A1.5 1.5 0 0 0 7 9.5h1Zm5.5 6h.5a.5.5 0 0 0-.5-.5v.5Zm-2 0V15a.5.5 0 0 0-.5.5h.5Zm1.5 0v3h1v-3h-1Zm-1 3v-3h-1v3h1Zm-.5-2.5h2v-1h-2v1Zm1 3a.5.5 0 0 1-.5-.5h-1a1.5 1.5 0 0 0 1.5 1.5v-1Zm.5-.5a.5.5 0 0 1-.5.5v1a1.5 1.5 0 0 0 1.5-1.5h-1Z"
        />
        <circle
            cx="16"
            cy="4"
            r="1.5"
            stroke="currentColor"
            stroke-linejoin="round"
        />
        <circle cx="13.5" cy="8.5" r=".5" fill="currentColor" />
        <circle
            cx="9.5"
            cy="5.5"
            r="1"
            stroke="currentColor"
            stroke-linejoin="round"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flaskLight",
} as DefineComponent;
</script>
