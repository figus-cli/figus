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
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm1-14.5a1 1 0 1 0-2 0v5.25c0 .69.56 1.25 1.25 1.25h3.25a1 1 0 1 0 0-2H13V6.5Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "timeFill",
} as DefineComponent;
</script>
