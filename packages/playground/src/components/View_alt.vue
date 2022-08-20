<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="1" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M18.227 11.38c.128.254.193.38.193.62s-.065.366-.193.62C17.6 13.853 15.812 16.5 12 16.5s-5.6-2.647-6.226-3.88c-.13-.254-.193-.38-.193-.62s.064-.366.193-.62C6.4 10.147 8.188 7.5 12 7.5s5.6 2.647 6.226 3.88Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M17 4h.2c1.791 0 2.687 0 3.244.556C21 5.114 21 6.01 21 7.8V8m-4 12h.2c1.791 0 2.687 0 3.244-.556C21 18.887 21 17.99 21 16.2V16M7 4h-.2c-1.791 0-2.687 0-3.244.556C3 5.114 3 6.01 3 7.8V8m4 12h-.2c-1.791 0-2.687 0-3.244-.556C3 18.887 3 17.99 3 16.2V16"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "viewAlt",
} as DefineComponent;
</script>
