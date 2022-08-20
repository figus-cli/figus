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
            d="M3 9v6c0 2.828 0 4.243.879 5.121C4.757 21 6.172 21 9 21h6c2.828 0 4.243 0 5.121-.879C21 19.243 21 17.828 21 15V9c0-2.828 0-4.243-.879-5.121C19.243 3 17.828 3 15 3H9"
        />
        <path
            fill="currentColor"
            d="M15 15v.5h.5V15H15ZM7.354 6.646a.5.5 0 1 0-.708.708l.708-.708ZM14.5 8v7h1V8h-1Zm.5 6.5H8v1h7v-1Zm.354.146-8-8-.708.708 8 8 .708-.708Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "inLight",
} as DefineComponent;
</script>
