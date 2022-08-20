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
            d="M7 4.018c-.54.023-.928.074-1.271.19a4 4 0 0 0-2.522 2.52C3 7.349 3 8.115 3 9.649c0 .095 0 .143.013.181a.25.25 0 0 0 .158.158c.038.013.086.013.182.013h17.294c.096 0 .144 0 .182-.013a.25.25 0 0 0 .158-.158C21 9.791 21 9.743 21 9.647c0-1.533 0-2.3-.207-2.918a4 4 0 0 0-2.522-2.522c-.343-.115-.732-.166-1.271-.189V6.5a1.5 1.5 0 0 1-3 0V4h-4v2.5a1.5 1.5 0 0 1-3 0V4.018Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            d="M3 11.5c0-.236 0-.354.073-.427C3.147 11 3.264 11 3.5 11h17c.236 0 .354 0 .427.073.073.073.073.191.073.427v.5c0 3.771 0 5.657-1.172 6.828C18.657 20 16.771 20 13 20h-2c-3.771 0-5.657 0-6.828-1.172C3 17.657 3 15.771 3 12v-.5Z"
        />
        <path stroke="currentColor" d="M8.5 2.5v4m7-4v4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "dateTodayDuotone",
} as DefineComponent;
</script>
