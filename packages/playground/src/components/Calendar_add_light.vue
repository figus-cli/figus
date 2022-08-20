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
            d="M19.5 9.5v-.8c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C17.98 5.5 17.42 5.5 16.3 5.5H7.7c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4.5 7.02 4.5 7.58 4.5 8.7v.8m15 0v6.8c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H7.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4.5 17.98 4.5 17.42 4.5 16.3V9.5m15 0h-15"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M8.5 3.5v4m7-4v4M12 17v-5m2.5 2.5h-5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "calendarAddLight",
} as DefineComponent;
</script>
