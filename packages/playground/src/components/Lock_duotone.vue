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
            fill-opacity=".24"
            d="M4 12c0-.943 0-1.414.293-1.707C4.586 10 5.057 10 6 10h12c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707v6.037c0 .382 0 .572-.029.74a2 2 0 0 1-1.164 1.491c-.156.07-.341.116-.71.208-1.238.31-1.857.464-2.476.578a20.001 20.001 0 0 1-7.243 0c-.618-.114-1.237-.269-2.474-.578-.37-.092-.555-.139-.71-.207a2 2 0 0 1-1.165-1.492C4 18.61 4 18.42 4 18.037V12Z"
        />
        <path stroke="currentColor" d="M16.5 10V9a4.5 4.5 0 1 0-9 0v1" />
        <circle cx="12" cy="15" r="2" fill="currentColor" />
        <path stroke="currentColor" d="M12 16v2.5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lockDuotone",
} as DefineComponent;
</script>
