<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M15 3H9a4 4 0 0 0-4 4v8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M9 11.5c0-1.196.002-2.01.071-2.628.068-.598.188-.889.342-1.09a2 2 0 0 1 .37-.369c.2-.154.491-.274 1.09-.342C11.49 7.001 12.303 7 13.5 7s2.01.002 2.628.071c.598.068.889.188 1.09.342.138.107.262.23.369.37.154.2.274.491.342 1.09.07.618.071 1.431.071 2.627v4c0 1.196-.002 2.01-.071 2.628-.068.598-.188.889-.342 1.09a1.998 1.998 0 0 1-.37.369c-.2.154-.491.274-1.09.342-.618.07-1.431.071-2.627.071s-2.01-.002-2.628-.071c-.598-.068-.889-.188-1.09-.342a1.999 1.999 0 0 1-.369-.37c-.154-.2-.274-.491-.342-1.09C9.001 17.51 9 16.697 9 15.5v-4Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "copyAlt",
} as DefineComponent;
</script>
