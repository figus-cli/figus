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
            d="M16 20h2.4c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C20 19.24 20 18.96 20 18.4V9.6c0-.56 0-.84-.109-1.054a1 1 0 0 0-.437-.437C19.24 8 18.96 8 18.4 8h-4.737c-.245 0-.367 0-.482-.028a1 1 0 0 1-.29-.12c-.1-.061-.187-.148-.36-.32L10.47 5.468c-.173-.173-.26-.26-.36-.322a1 1 0 0 0-.29-.12C9.704 5 9.582 5 9.337 5H5.6c-.56 0-.84 0-1.054.109a1 1 0 0 0-.437.437C4 5.76 4 6.04 4 6.6v11.8c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C4.76 20 5.04 20 5.6 20H8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="m12 12-3 3m3-3 3 3m-3-3v7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderUp",
} as DefineComponent;
</script>
