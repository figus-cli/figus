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
            d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-14a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Zm-1.5 4a1 1 0 1 0 0 2h.5v3a1 1 0 0 0 1 1h2a1 1 0 1 0 0-2h-1v-3a1 1 0 0 0-1-1h-1.5Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "infoAltFill",
} as DefineComponent;
</script>
