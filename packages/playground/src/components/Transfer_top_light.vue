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
            d="M9 19v-7H5.483a.2.2 0 0 1-.142-.341L12 5l6.659 6.659a.2.2 0 0 1-.142.341H15v7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "transferTopLight",
} as DefineComponent;
</script>
