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
            fill-rule="evenodd"
            d="M12 2c1.5 0 2.7 0 3.677.074A2.493 2.493 0 0 0 15.5 3v.5H15a2.5 2.5 0 0 0 0 5h.5V9a2.5 2.5 0 0 0 4.5 1.5V14c0 3.771 0 5.657-1.172 6.828C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.172C4 19.657 4 17.771 4 14v-4c0-3.771 0-5.657 1.172-6.828C6.343 2 8.229 2 12 2Zm-4 9a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8Zm0 3a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H8Zm0 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H8Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="2" d="M18 3v6m3-3h-6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDockAddFill",
} as DefineComponent;
</script>
