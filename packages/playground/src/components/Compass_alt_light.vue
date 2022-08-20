<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9.5" stroke="currentColor" />
        <path
            stroke="currentColor"
            d="m8.543 8.608 1.949 4.872a.05.05 0 0 0 .028.028l4.872 1.949a.05.05 0 0 0 .065-.065l-1.949-4.872a.05.05 0 0 0-.028-.028L8.608 8.543a.05.05 0 0 0-.065.065Z"
        />
        <path
            fill="currentColor"
            d="M13.354 11.354a.5.5 0 0 0 0-.708.5.5 0 0 0-.708 0l.708.708Zm-2.708 1.292a.5.5 0 0 0 0 .708.5.5 0 0 0 .708 0l-.708-.708Zm2-2-2 2 .708.708 2-2-.708-.708Z"
        />
        <path
            stroke="currentColor"
            d="M10.5 7.5V4.62a.05.05 0 0 1 .085-.035l2.83 2.83a.05.05 0 0 0 .085-.036V4.5"
        />
        <path
            fill="currentColor"
            d="M13.5 17a.5.5 0 0 0 0-1v1Zm-3 2a.5.5 0 0 0 0 1v-1Zm3-3h-2.419v1H13.5v-1Zm-2.76 2.107 2.204.735.317-.949-2.205-.735-.317.949Zm2.179.893H10.5v1h2.419v-1Zm.081-.081a.081.081 0 0 1-.081.081v1c.597 0 1.081-.484 1.081-1.081h-1Zm-.056-.077a.081.081 0 0 1 .056.077h1c0-.465-.298-.879-.74-1.026l-.315.949ZM10 17.082c0 .464.298.878.74 1.025l.315-.949a.081.081 0 0 1-.055-.077h-1ZM11.081 16c-.597 0-1.081.484-1.081 1.081h1a.081.081 0 0 1 .081-.081v-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "compassAltLight",
} as DefineComponent;
</script>
