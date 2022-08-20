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
            fill-rule="evenodd"
            d="M4.854 8C3.83 8 3 8.83 3 9.854v5.003c0 2.005 0 3.007.46 3.74a3 3 0 0 0 .944.943c.732.46 1.734.46 3.739.46h7.714c2.005 0 3.007 0 3.74-.46a3 3 0 0 0 .943-.944c.46-.732.46-1.734.46-3.739V9.854C21 8.83 20.17 8 19.146 8a1.854 1.854 0 0 1-1.658-1.025l-.821-1.642a4.49 4.49 0 0 0-.228-.425 2 2 0 0 0-1.447-.895C14.878 4 14.755 4 14.509 4H9.491c-.246 0-.37 0-.482.013a2 2 0 0 0-1.448.895 4.521 4.521 0 0 0-.228.425l-.82 1.642A1.854 1.854 0 0 1 4.854 8ZM14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm2 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cameraFill",
} as DefineComponent;
</script>
