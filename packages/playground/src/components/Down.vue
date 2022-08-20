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
            d="m14 20-.707.707.707.707.707-.707L14 20ZM6 3a1 1 0 1 0 0 2V3Zm2.293 12.707 5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM15 20V10h-2v10h2ZM8 3H6v2h2V3Zm7 7a7 7 0 0 0-7-7v2a5 5 0 0 1 5 5h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "down",
} as DefineComponent;
</script>
