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
            d="m12 20-.707.707.707.707.707-.707L12 20Zm1-15a1 1 0 1 0-2 0h2Zm-7.707 9.707 6 6 1.414-1.414-6-6-1.414 1.414Zm7.414 6 6-6-1.414-1.414-6 6 1.414 1.414ZM13 20V5h-2v15h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowDown",
} as DefineComponent;
</script>
