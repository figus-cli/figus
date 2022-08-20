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
            d="m20 12 .78-.625.5.625-.5.625L20 12Zm-3.22-5.625 4 5-1.56 1.25-4-5 1.56-1.25Zm4 6.25-4 5-1.56-1.25 4-5 1.56 1.25ZM4 12l-.78-.625-.5.625.5.625L4 12Zm3.22-5.625-4 5 1.56 1.25 4-5-1.561-1.25Zm-4 6.25 4 5 1.56-1.25-4-5-1.56 1.25Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "code",
} as DefineComponent;
</script>
