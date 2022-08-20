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
            d="M15 5h5v10c0 1.886 0 2.828-.586 3.414C18.828 19 17.886 19 16 19h-1"
        />
        <path
            fill="currentColor"
            d="M4 19H3v1h1v-1Zm0 1h5v-2H4v2ZM9 4H6v2h3V4ZM3 7v12h2V7H3Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1V4Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "array",
} as DefineComponent;
</script>
