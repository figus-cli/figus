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
            d="M14 4H7.5c-1.398 0-2.097 0-2.648.228a3 3 0 0 0-1.624 1.624C3 6.403 3 7.102 3 8.5v.75a.75.75 0 0 0 .75.75H4a2 2 0 1 1 0 4h-.25a.75.75 0 0 0-.75.75v.75c0 1.398 0 2.097.228 2.648a3 3 0 0 0 1.624 1.624C5.403 20 6.102 20 7.5 20H14v-1a1 1 0 0 1 1-1v-2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1v-2a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1V6a1 1 0 0 1-1-1V4Zm1 2v2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v2a1 1 0 0 1 1 1v1h.5c1.398 0 2.097 0 2.648-.228a3 3 0 0 0 1.624-1.624C21 17.597 21 16.898 21 15.5v-.75a.75.75 0 0 0-.75-.75H20a2 2 0 1 1 0-4h.25a.75.75 0 0 0 .75-.75V8.5c0-1.398 0-2.097-.228-2.648a3 3 0 0 0-1.624-1.624C18.597 4 17.898 4 16.5 4H16v1a1 1 0 0 1-1 1Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ticketUseFill",
} as DefineComponent;
</script>
