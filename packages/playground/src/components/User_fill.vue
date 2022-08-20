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
            d="M19.651 19.405c.553-.115.883-.693.608-1.187-.606-1.087-1.56-2.043-2.78-2.772C15.907 14.508 13.98 14 12 14c-1.981 0-3.907.508-5.479 1.446-1.22.729-2.174 1.685-2.78 2.772-.275.494.055 1.072.607 1.187a37.503 37.503 0 0 0 15.303 0Z"
        />
        <circle cx="12" cy="8" r="5" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userFill",
} as DefineComponent;
</script>
