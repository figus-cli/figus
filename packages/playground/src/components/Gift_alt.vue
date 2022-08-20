<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="18"
            height="3"
            x="2"
            y="10"
            stroke="currentColor"
            stroke-width="2"
            rx="1.5"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M5 13v6.4c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C5.76 21 6.04 21 6.6 21h8.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C17 20.24 17 19.96 17 19.4V13"
        />
        <path
            fill="currentColor"
            d="M12 10v1h1v-1h-1Zm1 0V6.5h-2V10h2Zm-4.5 1H12V9H8.5v2ZM4 6.5A4.5 4.5 0 0 0 8.5 11V9A2.5 2.5 0 0 1 6 6.5H4ZM8.5 2A4.5 4.5 0 0 0 4 6.5h2A2.5 2.5 0 0 1 8.5 4V2ZM13 6.5A4.5 4.5 0 0 0 8.5 2v2A2.5 2.5 0 0 1 11 6.5h2Z"
        />
        <path
            fill="currentColor"
            d="M12 10v1h-1v-1h1Zm-1 0V7.5h2V10h-2Zm3.5 1H12V9h2.5v2ZM18 7.5a3.5 3.5 0 0 1-3.5 3.5V9A1.5 1.5 0 0 0 16 7.5h2ZM14.5 4A3.5 3.5 0 0 1 18 7.5h-2A1.5 1.5 0 0 0 14.5 6V4ZM11 7.5A3.5 3.5 0 0 1 14.5 4v2A1.5 1.5 0 0 0 13 7.5h-2Z"
        />
        <path stroke="currentColor" stroke-width="2" d="M12 13v8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "giftAlt",
} as DefineComponent;
</script>
