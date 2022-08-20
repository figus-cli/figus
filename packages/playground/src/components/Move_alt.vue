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
            d="m12 3 .312-.39L12 2.36l-.312.25L12 3Zm-.5 6a.5.5 0 0 0 1 0h-1Zm4.812-3.19-4-3.2-.624.78 4 3.2.624-.78Zm-4.624-3.2-4 3.2.624.78 4-3.2-.624-.78ZM11.5 3v6h1V3h-1Zm9.5 9 .39.312.25-.312-.25-.312L21 12Zm-6-.5a.5.5 0 0 0 0 1v-1Zm3.19 4.812 3.2-4-.78-.624-3.2 4 .78.624Zm3.2-4.624-3.2-4-.78.624 3.2 4 .78-.624ZM21 11.5h-6v1h6v-1ZM12 21l.312.39-.312.25-.312-.25L12 21Zm-.5-6a.5.5 0 0 1 1 0h-1Zm4.812 3.19-4 3.2-.624-.78 4-3.2.624.78Zm-4.624 3.2-4-3.2.624-.78 4 3.2-.624.78ZM11.5 21v-6h1v6h-1ZM3 12l-.39.312L2.36 12l.25-.312L3 12Zm6-.5a.5.5 0 0 1 0 1v-1Zm-3.19 4.812-3.2-4 .78-.624 3.2 4-.78.624Zm-3.2-4.624 3.2-4 .78.624-3.2 4-.78-.624ZM3 11.5h6v1H3v-1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "moveAlt",
} as DefineComponent;
</script>
