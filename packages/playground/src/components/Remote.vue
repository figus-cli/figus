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
            d="m11 9 .78-.625.5.625-.5.625L11 9ZM7.78 3.375l4 5-1.56 1.25-4-5 1.561-1.25Zm4 6.25-4 5-1.56-1.25 4-5 1.56 1.25ZM13 15l-.78-.625-.5.625.5.625L13 15Zm3.22-5.625-4 5 1.56 1.25 4-5-1.56-1.25Zm-4 6.25 4 5 1.56-1.25-4-5-1.56 1.25Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "remote",
} as DefineComponent;
</script>
