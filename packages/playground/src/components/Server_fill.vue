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
            d="M17.98 7.5c.019.238.029.357.09.421s.184.08.429.11A4 4 0 0 1 18 16h-.5c-.236 0-.354 0-.427-.073C17 15.854 17 15.736 17 15.5V14c0-1.886 0-2.828-.586-3.414C15.828 10 14.886 10 13 10h-2c-1.886 0-2.828 0-3.414.586C7 11.172 7 12.114 7 14v1.5c0 .236 0 .354-.073.427C6.854 16 6.736 16 6.5 16H6a4 4 0 0 1-.499-7.97c.245-.03.367-.045.429-.109.061-.064.071-.183.09-.42a5.998 5.998 0 0 1 1.22-3.154 6 6 0 0 1 10.74 3.154Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M8.586 11.586C8 12.172 8 13.114 8 15v2c0 1.886 0 2.828.586 3.414C9.172 21 10.114 21 12 21c1.886 0 2.828 0 3.414-.586C16 19.828 16 18.886 16 17v-2c0-1.886 0-2.828-.586-3.414C14.828 11 13.886 11 12 11c-1.886 0-2.828 0-3.414.586ZM11.5 15a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2h-1Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "serverFill",
} as DefineComponent;
</script>
