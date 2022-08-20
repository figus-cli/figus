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
            d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-4.828 2.757a5 5 0 0 0-6.929-6.929l6.929 6.93ZM7.828 9.243l6.93 6.929a5 5 0 0 1-6.929-6.929ZM12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "cancelFill",
} as DefineComponent;
</script>
