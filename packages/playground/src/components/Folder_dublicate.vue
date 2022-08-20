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
            d="M8 7c0-.943 0-1.414.293-1.707C8.586 5 9.057 5 10 5h1.764c.601 0 .902 0 1.144.15.241.149.376.418.645.956L14.5 8H18c.943 0 1.414 0 1.707.293C20 8.586 20 9.057 20 10v3c0 .943 0 1.414-.293 1.707C19.414 15 18.943 15 18 15h-8c-.943 0-1.414 0-1.707-.293C8 14.414 8 13.943 8 13V7Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M17 15v2.4c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C16.24 19 15.96 19 15.4 19H5.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C4 18.24 4 17.96 4 17.4V9.6c0-.56 0-.84.109-1.054a1 1 0 0 1 .437-.437C4.76 8 5.04 8 5.6 8H8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderDublicate",
} as DefineComponent;
</script>
