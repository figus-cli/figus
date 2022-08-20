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
            d="M12.398 19.804C13.881 19.034 19 16.016 19 11a7 7 0 1 0-14 0c0 5.016 5.119 8.035 6.602 8.804a.855.855 0 0 0 .796 0ZM12 14a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pinFill",
} as DefineComponent;
</script>
