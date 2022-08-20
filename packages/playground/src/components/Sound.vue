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
            d="M13 14H8.818a3.249 3.249 0 1 0 .403 6.472l.557-.07A3.678 3.678 0 0 0 13 16.754V7.39c0-1.619 0-2.428.474-2.987.474-.56 1.272-.693 2.868-.96L18.7 3.05c.136-.022.204-.034.24.006.037.04.02.106-.013.24l-.895 3.581c-.015.06-.023.09-.044.11-.02.02-.05.026-.111.038L13 8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sound",
} as DefineComponent;
</script>
