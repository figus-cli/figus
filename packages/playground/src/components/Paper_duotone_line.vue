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
            fill-opacity=".24"
            d="M15 5.705V21l-3-1-3 1-3-1-3 1V6.486c0-1.391 0-2.087.331-2.588a2 2 0 0 1 .567-.567C4.399 3 5.095 3 6.486 3h8.613c.87 0 1.21 1.127.487 1.609A1.317 1.317 0 0 0 15 5.705Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M18 3a3 3 0 0 1 3 3v2.143c0 .334 0 .501-.077.623a.5.5 0 0 1-.157.158C20.644 9 20.477 9 20.143 9H15m3-6a3 3 0 0 0-3 3v3m3-6H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v14l3-1 3 1 3-1 3 1V9"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M7 7h4m-3 4H7m0 4h3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "paperDuotoneLine",
} as DefineComponent;
</script>
