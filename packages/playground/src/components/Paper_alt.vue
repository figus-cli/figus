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
            d="M16 8c.93 0 1.395 0 1.776.102a3 3 0 0 1 2.122 2.121C20 10.605 20 11.07 20 12v6a2 2 0 1 1-4 0V7.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C14.48 4 13.92 4 12.8 4H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 5.52 4 6.08 4 7.2v9.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 20 6.08 20 7.2 20H18"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8H8v4h4V8Z"
        />
        <path
            fill="currentColor"
            d="M8 15a1 1 0 1 0 0 2v-2Zm4 2a1 1 0 1 0 0-2v2Zm-4 0h4v-2H8v2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "paperAlt",
} as DefineComponent;
</script>
