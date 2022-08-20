<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            d="M9.3 5.681c1.338-1.824 4.062-1.824 5.4 0l.768 1.045a16.093 16.093 0 0 1 3.014 7.707 5.428 5.428 0 0 1-3.902 5.83l-.768.22a6.596 6.596 0 0 1-3.624 0l-.768-.22a5.428 5.428 0 0 1-3.902-5.83 16.092 16.092 0 0 1 3.015-7.707l.766-1.045Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "proteinLight",
} as DefineComponent;
</script>
