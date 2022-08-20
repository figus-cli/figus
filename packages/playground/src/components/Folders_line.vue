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
            stroke-width="2"
            d="M7 2v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C8.52 8 9.08 8 10.2 8H15"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M7 5v9.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C8.52 18 9.08 18 10.2 18H15"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 16.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C15.76 15 16.04 15 16.6 15h.4l1 1h1.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 16.76 21 17.04 21 17.6v1.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 21 19.96 21 19.4 21h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C15 20.24 15 19.96 15 19.4v-2.8Zm0-10c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C15.76 5 16.04 5 16.6 5h.4l1 1h1.4c.56 0 .84 0 1.054.109a1 1 0 0 1 .437.437C21 6.76 21 7.04 21 7.6v1.8c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C20.24 11 19.96 11 19.4 11h-2.8c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C15 10.24 15 9.96 15 9.4V6.6Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "foldersLine",
} as DefineComponent;
</script>
