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
            stroke-width="2"
            d="M5 8V2"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3.27 9.805A9.02 9.02 0 0 0 3 12a9 9 0 0 0 9 9h4.5c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 18.597 21 17.898 21 16.5V12a9 9 0 0 0-9-9 9.02 9.02 0 0 0-2.196.27A2.491 2.491 0 0 1 10.5 5 2.5 2.5 0 0 1 8 7.5h-.5V8A2.5 2.5 0 0 1 5 10.5a2.491 2.491 0 0 1-1.73-.696ZM9 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H9Zm3 4a1 1 0 1 0 0 2h3a1 1 0 1 0 0-2h-3Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M2 5h6"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatPlusFill",
} as DefineComponent;
</script>
