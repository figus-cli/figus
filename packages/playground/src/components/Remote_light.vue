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
            d="m11 9 .39-.312.25.312-.25.312L11 9ZM7.39 3.688l4 5-.78.624-4-5 .78-.624Zm4 5.624-4 5-.78-.624 4-5 .78.624ZM13 15l-.39-.312-.25.312.25.312L13 15Zm3.61-5.312-4 5 .78.624 4-5-.78-.624Zm-4 5.624 4 5 .78-.624-4-5-.78.624Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "remoteLight",
} as DefineComponent;
</script>
