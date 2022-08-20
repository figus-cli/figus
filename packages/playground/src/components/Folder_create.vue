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
            d="M9 13h3m0 0h3m-3 0v3m0-3v-3m6-4c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C21 7.602 21 8.068 21 9m-3 11c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 18.398 21 17.932 21 17M6 20c-.932 0-1.398 0-1.765-.152a2 2 0 0 1-1.083-1.083C3 18.398 3 17.932 3 17M6 3c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 4.602 3 5.068 3 6v1m18 4v4m-5-9h-1.93a2 2 0 0 1-1.664-.89l-.812-1.22A2 2 0 0 0 9.93 3H8M3 13v2m0-6v2m13 9h-3m-2 0H8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderCreate",
} as DefineComponent;
</script>
