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
            d="M7.05 6H9a2 2 0 0 1 0 4H7v1h2a2 2 0 1 1 0 4H7v1h2a2 2 0 1 1 0 4H7.293a1.512 1.512 0 0 0 .293.414C8.172 21 9.114 21 11 21h5c1.886 0 2.829 0 3.414-.586C20 19.828 20 18.886 20 17V8c0-1.886 0-2.828-.586-3.414C18.828 4 17.886 4 16 4h-5c-1.886 0-2.828 0-3.414.586-.327.326-.471.764-.535 1.414ZM16 11a1 1 0 0 1-1-1V8a1 1 0 1 1 2 0v2a1 1 0 0 1-1 1ZM5 7a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H5Zm0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H5Zm0 5a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2H5Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "notebookFill",
} as DefineComponent;
</script>
