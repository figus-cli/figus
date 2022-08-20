<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="17" cy="8" r="4" fill="currentColor" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M15 8a2 2 0 1 1 4 0h-4Zm-4 0c0-.701.12-1.374.341-2H5a1 1 0 1 0 0 2h6Zm.803 3a6.03 6.03 0 0 0 1.88 2H5a1 1 0 1 1 0-2h6.803ZM5 16a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H5Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "statusList",
} as DefineComponent;
</script>
