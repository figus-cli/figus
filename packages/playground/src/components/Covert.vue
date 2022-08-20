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
            d="M6 3h12a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
        />
        <path
            fill="currentColor"
            d="M15.3 7.625 14.52 7l.78.625Zm2.92-5.25L14.52 7l1.561 1.25 3.7-4.625-1.562-1.25ZM14.52 7H9.48v2h5.04V7ZM9.48 7 5.782 2.375l-1.562 1.25 3.7 4.624L9.481 7Zm0 0L7.92 8.25A2 2 0 0 0 9.481 9V7Zm5.04 0v2a2 2 0 0 0 1.561-.75L14.52 7Zm.78 9.375-.78.625.78-.625Zm2.92 5.25L14.52 17l1.561-1.25 3.7 4.625-1.562 1.25ZM14.52 17H9.48v-2h5.04v2Zm-5.04 0-3.699 4.625-1.562-1.25 3.7-4.624L9.48 17Zm0 0L7.92 15.75A2 2 0 0 1 9.481 15v2Zm5.04 0v-2a2 2 0 0 1 1.561.75L14.52 17Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 13v3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "covert",
} as DefineComponent;
</script>
