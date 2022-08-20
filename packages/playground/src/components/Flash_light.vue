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
            stroke-linejoin="round"
            d="M19.5 17.5h-15m2.5 0 1.347-7.184A1 1 0 0 1 9.33 9.5h5.34a1 1 0 0 1 .983.816L17 17.5m4.5-8h-3"
        />
        <path
            fill="currentColor"
            d="M12.5 2.5a.5.5 0 0 0-1 0h1Zm-1 3a.5.5 0 0 0 1 0h-1Zm0-3v3h1v-3h-1Zm7.354 2.354a.5.5 0 0 0-.708-.708l.708.708Zm-2.708 1.292a.5.5 0 0 0 .708.708l-.708-.708Zm2-2-2 2 .708.708 2-2-.708-.708Zm-13 .708a.5.5 0 1 1 .708-.708l-.708.708Zm2.708 1.292a.5.5 0 1 1-.708.708l.708-.708Zm-2-2 2 2-.708.708-2-2 .708-.708Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M5.5 9.5h-3m10 2h1"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "flashLight",
} as DefineComponent;
</script>
