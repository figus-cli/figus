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
            d="M19.5 9h-15a1.5 1.5 0 0 1 0-3h15a1.5 1.5 0 0 1 0 3Z"
        />
        <path
            fill="currentColor"
            d="M20 9a1 1 0 1 0-2 0h2Zm-2 4a1 1 0 1 0 2 0h-2Zm0-4v4h2V9h-2Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="m8 9-.982 6.872a.15.15 0 0 0 .106.165l4.833 1.45a.15.15 0 0 0 .086 0l4.833-1.45a.15.15 0 0 0 .106-.165L16 9"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="2"
            d="m7.5 13 4.468.993a.152.152 0 0 0 .065 0L16.5 13"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "mortarboardAlt_2",
} as DefineComponent;
</script>
