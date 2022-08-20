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
            d="M4.5 10.7c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C6.02 7.5 6.58 7.5 7.7 7.5h8.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v3.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218H7.7c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4.5 15.98 4.5 15.42 4.5 14.3v-3.6Z"
        />
        <path
            fill="currentColor"
            d="M7.854 10.146a.5.5 0 0 0-.708.708l.708-.708Zm-.708 4a.5.5 0 0 0 .708.708l-.708-.708ZM9.5 12.5l.354.354a.5.5 0 0 0 0-.708L9.5 12.5Zm-2.354-1.646 2 2 .708-.708-2-2-.708.708Zm2 1.292-2 2 .708.708 2-2-.708-.708Z"
        />
        <path stroke="currentColor" d="M11.5 14.5h5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "terminalLight",
} as DefineComponent;
</script>
