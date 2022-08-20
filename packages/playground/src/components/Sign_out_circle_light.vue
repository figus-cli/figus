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
            d="M8 18.928a8 8 0 0 0 8 0A8 8 0 0 0 18.928 8 8 8 0 0 0 12 4a8 8 0 0 0-4 1.072"
        />
        <path
            fill="currentColor"
            d="m2 12-.39-.312-.25.312.25.312L2 12Zm9 .5a.5.5 0 0 0 0-1v1ZM5.61 6.688l-4 5 .78.624 4-5-.78-.624Zm-4 5.624 4 5 .78-.624-4-5-.78.624ZM2 12.5h9v-1H2v1Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "signOutCircleLight",
} as DefineComponent;
</script>
