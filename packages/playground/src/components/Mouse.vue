<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 10.8c0-2.619 0-3.928.59-4.89a4 4 0 0 1 1.32-1.32C7.872 4 9.181 4 11.8 4h.4c2.619 0 3.928 0 4.89.59a4.001 4.001 0 0 1 1.32 1.32c.59.962.59 2.271.59 4.89V14c0 .929 0 1.393-.051 1.783a6 6 0 0 1-5.166 5.166C13.393 21 12.93 21 12 21c-.929 0-1.393 0-1.783-.051a6 6 0 0 1-5.166-5.166C5 15.393 5 14.93 5 14v-3.2Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 4v5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mouse",
} as DefineComponent;
</script>
