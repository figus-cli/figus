<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M17 4h.2c1.791 0 2.687 0 3.244.556C21 5.114 21 6.01 21 7.8V8m-4 12h.2c1.791 0 2.687 0 3.244-.556C21 18.887 21 17.99 21 16.2V16M7 4h-.2c-1.791 0-2.687 0-3.244.556C3 5.114 3 6.01 3 7.8V8m4 12h-.2c-1.791 0-2.687 0-3.244-.556C3 18.887 3 17.99 3 16.2V16"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M18.815 12c0-.536-.126-.754-.377-1.189C17.583 9.332 15.656 7 12 7c-3.656 0-5.583 2.333-6.438 3.811-.251.435-.377.653-.377 1.189s.126.754.377 1.189C6.417 14.668 8.344 17 12 17s5.583-2.333 6.438-3.811c.251-.435.377-.653.377-1.189ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "viewAltFill",
} as DefineComponent;
</script>
