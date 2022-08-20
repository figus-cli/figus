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
            d="M12 12.5H6v1h6v-1Zm6 0h-6v1h6v-1Zm2.5-2.5a2.5 2.5 0 0 1-2.5 2.5v1a3.5 3.5 0 0 0 3.5-3.5h-1ZM18 7.5a2.5 2.5 0 0 1 2.5 2.5h1A3.5 3.5 0 0 0 18 6.5v1Zm-.98-1.75A5.501 5.501 0 0 0 12 2.5v1a4.501 4.501 0 0 1 4.108 2.66l.912-.41ZM12 2.5a5.501 5.501 0 0 0-5.02 3.25l.912.41A4.501 4.501 0 0 1 12 3.5v-1Zm-6 4A3.5 3.5 0 0 0 2.5 10h1A2.5 2.5 0 0 1 6 7.5v-1ZM2.5 10A3.5 3.5 0 0 0 6 13.5v-1A2.5 2.5 0 0 1 3.5 10h-1Zm4.48-4.25c-.209.465-.595.75-.98.75v1c.895 0 1.577-.637 1.892-1.34l-.912-.41ZM18 6.5c-.385 0-.771-.285-.98-.75l-.912.41c.316.703.997 1.34 1.892 1.34v-1Z"
        />
        <path stroke="currentColor" d="M12 19v-2m5 3v-3M7 21v-4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "rainLight",
} as DefineComponent;
</script>
