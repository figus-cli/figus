<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect width="16" height="4" x="4" y="16" stroke="currentColor" rx="2" />
        <path
            fill="none"
            stroke="currentColor"
            d="M4.91 11.364 8 16h8l3.09-4.636c.436-.653.654-.98.618-1.335-.035-.356-.312-.633-.867-1.188L12 2 5.16 8.84c-.556.556-.833.833-.868 1.189-.036.356.182.682.617 1.335Z"
        />
        <circle cx="12" cy="11" r="2.5" stroke="currentColor" />
        <path fill="none" stroke="currentColor" d="M12 2v7" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "penLight",
} as DefineComponent;
</script>
