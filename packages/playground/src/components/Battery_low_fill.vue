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
            d="M6.586 5.586C6 6.172 6 7.114 6 9v10c0 1.886 0 2.828.586 3.414C7.172 23 8.114 23 10 23h4c1.886 0 2.828 0 3.414-.586C18 21.828 18 20.886 18 19V9c0-1.886 0-2.828-.586-3.414C16.828 5 15.886 5 14 5h-4c-1.886 0-2.828 0-3.414.586Zm1.648 2.648C8 8.47 8 8.846 8 9.6v5.8c0 .754 0 1.131.234 1.366C8.47 17 8.846 17 9.6 17h4.8c.754 0 1.131 0 1.366-.234C16 16.53 16 16.154 16 15.4V9.6c0-.754 0-1.131-.234-1.366C15.53 8 15.154 8 14.4 8H9.6c-.754 0-1.131 0-1.366.234Zm1.059-6.941C9 1.586 9 2.057 9 3h6c0-.943 0-1.414-.293-1.707C14.414 1 13.943 1 13 1h-2c-.943 0-1.414 0-1.707.293Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "batteryLowFill",
} as DefineComponent;
</script>
