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
            fill-rule="evenodd"
            d="M10.528 8A6 6 0 1 1 15 18H8A5 5 0 0 1 8 8h2.528Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="m10.528 8 .447.4-.179.2h-.268V8ZM15 6.6c-1.6 0-3.035.694-4.025 1.8l-.894-.8A6.585 6.585 0 0 1 15 5.4v1.2Zm5.4 5.4A5.4 5.4 0 0 0 15 6.6V5.4a6.6 6.6 0 0 1 6.6 6.6h-1.2ZM15 17.4a5.4 5.4 0 0 0 5.4-5.4h1.2a6.6 6.6 0 0 1-6.6 6.6v-1.2Zm-7 0h7v1.2H8v-1.2ZM3.6 13A4.4 4.4 0 0 0 8 17.4v1.2A5.6 5.6 0 0 1 2.4 13h1.2ZM8 8.6A4.4 4.4 0 0 0 3.6 13H2.4A5.6 5.6 0 0 1 8 7.4v1.2Zm2.528 0H8V7.4h2.528v1.2Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M16.318 17.854a6 6 0 0 0 4.346-7.833 6 6 0 0 0-8.28-3.421A6 6 0 0 0 9 12.024"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cloudAltDuotone",
} as DefineComponent;
</script>
