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
            d="M5 9h7V5.483a.2.2 0 0 1 .341-.142L19 12l-6.659 6.659a.2.2 0 0 1-.341-.142V15H5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transferRightLight",
} as DefineComponent;
</script>
