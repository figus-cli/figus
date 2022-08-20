<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="currentColor"
            d="m7.436 5.955-.912-.41.912.41Zm9.128 0-.912.41.912-.41ZM12 12H6v2h6v-2Zm6 0h-6v2h6v-2Zm2-2a2 2 0 0 1-2 2v2a4 4 0 0 0 4-4h-2Zm-2-2a2 2 0 0 1 2 2h2a4 4 0 0 0-4-4v2Zm-.524-2.455A6.001 6.001 0 0 0 12 2v2a4 4 0 0 1 3.652 2.364l1.824-.819ZM12 2a6.001 6.001 0 0 0-5.476 3.545l1.824.82A4 4 0 0 1 12 4V2ZM6 6a4 4 0 0 0-4 4h2a2 2 0 0 1 2-2V6Zm-4 4a4 4 0 0 0 4 4v-2a2 2 0 0 1-2-2H2Zm4.524-4.455C6.369 5.89 6.129 6 6 6v2c1.15 0 1.979-.813 2.348-1.636l-1.824-.819ZM18 6c-.13 0-.369-.11-.524-.455l-1.824.82C16.02 7.186 16.849 8 18 8V6Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 19v-2m5 3v-3M7 21v-4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "rain",
} as DefineComponent;
</script>
