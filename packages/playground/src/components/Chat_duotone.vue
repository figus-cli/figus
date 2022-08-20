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
            fill-opacity=".24"
            d="M4 12a8 8 0 1 1 16 0v6.667c0 .31 0 .465-.034.592a1 1 0 0 1-.707.707c-.127.034-.282.034-.592.034H12a8 8 0 0 1-8-8Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M8.5 10.5h7m-7 3h5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatDuotone",
} as DefineComponent;
</script>
