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
            d="M13 16.753V14H8.818a3.249 3.249 0 1 0 .403 6.472l.557-.07A3.678 3.678 0 0 0 13 16.754Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M13 8v-.612c0-1.618 0-2.427.474-2.987.474-.559 1.272-.692 2.868-.958L18.7 3.05c.136-.023.204-.034.24.006.037.04.02.106-.013.24l-.895 3.581c-.015.06-.023.09-.044.11-.02.02-.05.026-.111.038L13 8Zm0 0v6m0 0v2.753a3.678 3.678 0 0 1-3.222 3.65l-.558.07A3.249 3.249 0 1 1 8.819 14H13Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "soundFill",
} as DefineComponent;
</script>
