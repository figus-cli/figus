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
            d="M7 5.877a1 1 0 0 0-1.371-.928l-2 .8A1 1 0 0 0 3 6.677v11.846a1 1 0 0 0 1.371.928l2-.8A1 1 0 0 0 7 17.723V5.877Zm2 11.592a1 1 0 0 0 .757.97l4 1A1 1 0 0 0 15 18.47V6.531a1 1 0 0 0-.757-.97l-4-1A1 1 0 0 0 9 5.53v11.938Zm8.629-12.12a1 1 0 0 0-.629.928v11.846a1 1 0 0 0 1.371.928l2-.8a1 1 0 0 0 .629-.928V5.477a1 1 0 0 0-1.371-.928l-2 .8Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mapFill",
} as DefineComponent;
</script>
