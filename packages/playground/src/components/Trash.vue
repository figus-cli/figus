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
            d="M10 15v-3m4 3v-3M3 7h18c-.932 0-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C18 8.602 18 9.068 18 10v6c0 1.886 0 2.828-.586 3.414C16.828 20 15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586C6 18.828 6 17.886 6 16v-6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C4.398 7 3.932 7 3 7Zm7.068-3.63c.114-.106.365-.2.715-.267C11.132 3.036 11.56 3 12 3s.868.036 1.218.103c.349.067.6.161.714.268"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "trash",
} as DefineComponent;
</script>
