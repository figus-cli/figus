<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="1.5" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M16.5 12c0 2.7-.548 5.12-1.412 6.848C14.21 20.604 13.09 21.5 12 21.5c-1.09 0-2.21-.896-3.088-2.652C8.048 17.12 7.5 14.7 7.5 12c0-2.7.548-5.12 1.412-6.848C9.79 3.396 10.91 2.5 12 2.5c1.09 0 2.21.896 3.088 2.652C15.952 6.88 16.5 9.3 16.5 12Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M12 16.5c-2.7 0-5.12-.548-6.848-1.412C3.396 14.21 2.5 13.09 2.5 12c0-1.09.896-2.21 2.652-3.088C6.88 8.048 9.3 7.5 12 7.5c2.7 0 5.12.548 6.848 1.412C20.604 9.79 21.5 10.91 21.5 12c0 1.09-.896 2.21-2.652 3.088C17.12 15.952 14.7 16.5 12 16.5Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "atomAltLight",
} as DefineComponent;
</script>
