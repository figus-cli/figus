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
            d="M20.543 6.704C21 7.807 21 9.204 21 12c0 2.796 0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 21 14.796 21 12 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15v-3c0-2.796 0-4.194.457-5.296a6 6 0 0 1 3.247-3.247C7.807 3 9.204 3 12 3c2.796 0 4.194 0 5.296.457a6 6 0 0 1 3.247 3.247ZM8 10a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Zm0 4a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatAltFill",
} as DefineComponent;
</script>
