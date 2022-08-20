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
            d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-16a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1Zm3.535 2.05a1 1 0 0 1 1.415 0A7 7 0 0 1 12 19a7 7 0 0 1-6.467-4.321A7 7 0 0 1 7.05 7.05a1 1 0 0 1 1.414 1.414 5 5 0 1 0 7.071 0 1 1 0 0 1 0-1.414Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "onButtonFill",
} as DefineComponent;
</script>
