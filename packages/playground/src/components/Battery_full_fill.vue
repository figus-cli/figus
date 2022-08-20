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
            d="M6 9c0-1.886 0-2.828.586-3.414C7.172 5 8.114 5 10 5h4c1.886 0 2.828 0 3.414.586C18 6.172 18 7.114 18 9v10c0 1.886 0 2.828-.586 3.414C16.828 23 15.886 23 14 23h-4c-1.886 0-2.828 0-3.414-.586C6 21.828 6 20.886 6 19V9Zm3-6c0-.943 0-1.414.293-1.707C9.586 1 10.057 1 11 1h2c.943 0 1.414 0 1.707.293C15 1.586 15 2.057 15 3v1H9V3Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "batteryFullFill",
} as DefineComponent;
</script>
