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
            d="m9.803 9 .432.25-.144.25h-.288V9ZM15 6.5a5.498 5.498 0 0 0-4.764 2.75l-.866-.5A6.498 6.498 0 0 1 15 5.5v1Zm5.5 5.5A5.5 5.5 0 0 0 15 6.5v-1a6.5 6.5 0 0 1 6.5 6.5h-1ZM15 17.5a5.5 5.5 0 0 0 5.5-5.5h1a6.5 6.5 0 0 1-6.5 6.5v-1Zm-7.5 0H15v1H7.5v-1Zm-4-4a4 4 0 0 0 4 4v1a5 5 0 0 1-5-5h1Zm4-4a4 4 0 0 0-4 4h-1a5 5 0 0 1 5-5v1Zm2.303 0H7.5v-1h2.303v1Z"
        />
        <path
            stroke="currentColor"
            d="M16.318 17.854a6 6 0 0 0 4.346-7.833 6 6 0 0 0-8.28-3.421A6 6 0 0 0 9 12.024"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cloudAltLight",
} as DefineComponent;
</script>
