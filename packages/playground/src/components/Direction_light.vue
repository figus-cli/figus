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
            d="M3.5 8.3c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.78 3.5 6.62 3.5 8.3 3.5h7.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311c.327.642.327 1.482.327 3.162v7.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311c-.642.327-1.482.327-3.162.327H8.3c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3.5 18.22 3.5 17.38 3.5 15.7V8.3Z"
        />
        <path
            fill="currentColor"
            d="M6.5 7.5V7a.5.5 0 0 0-.5.5h.5Zm2 .5a.5.5 0 0 0 0-1v1ZM6 9.5a.5.5 0 0 0 1 0H6Zm5.5 6.5a.5.5 0 0 0 1 0h-1Zm-.025-4.232L6.854 7.146l-.708.707 4.622 4.622.707-.707ZM6.5 8h2V7h-2v1ZM6 7.5v2h1v-2H6Zm5.5 6.743V16h1v-1.757h-1Zm-.732-1.768a2.5 2.5 0 0 1 .732 1.768h1a3.5 3.5 0 0 0-1.025-2.475l-.707.707Z"
        />
        <path
            fill="currentColor"
            d="M17.5 7.5V7a.5.5 0 0 1 .5.5h-.5Zm-2 .5a.5.5 0 0 1 0-1v1ZM18 9.5a.5.5 0 0 1-1 0h1ZM12.5 16a.5.5 0 0 1-1 0h1Zm.025-4.232 4.621-4.621.708.707-4.622 4.62-.707-.706ZM17.5 8h-2V7h2v1Zm.5-.5v2h-1v-2h1Zm-5.5 6.743V16h-1v-1.757h1Zm.732-1.768a2.5 2.5 0 0 0-.732 1.768h-1a3.5 3.5 0 0 1 1.025-2.475l.707.707Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "directionLight",
} as DefineComponent;
</script>
