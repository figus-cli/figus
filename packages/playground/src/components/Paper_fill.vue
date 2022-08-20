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
            d="M2 21V7c0-1.886 0-2.828.586-3.414C3.172 3 4.114 3 6 3h10c.832 0 1.478 0 2.004.027A4.5 4.5 0 0 0 14 7.5V11l-.099 9.967L11 20l-3 1-3-1-3 1Zm19-10h-5V7.5a2.5 2.5 0 0 1 5 0V11ZM4 7a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "paperFill",
} as DefineComponent;
</script>
