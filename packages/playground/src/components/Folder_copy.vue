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
            d="M9 6c0-.943 0-1.414.293-1.707C9.586 4 10.057 4 11 4h1.764c.601 0 .902 0 1.144.15.241.149.376.418.645.956L15.5 7H19c.943 0 1.414 0 1.707.293C21 7.586 21 8.057 21 9v3c0 .943 0 1.414-.293 1.707C20.414 14 19.943 14 19 14h-8c-.943 0-1.414 0-1.707-.293C9 13.414 9 12.943 9 12V6Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-miterlimit="1.414"
            stroke-width="2"
            d="M6 7H5a2 2 0 0 0-2 2v1m3 10H5a2 2 0 0 1-2-2v-1m10 3h1a2 2 0 0 0 2-2v-1m-5 3H8m-5-8v3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderCopy",
} as DefineComponent;
</script>
