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
            stroke-opacity=".24"
            d="M4.431 14.912c.488-2.926.732-4.389 1.701-5.31a4.001 4.001 0 0 1 .35-.298C7.551 8.5 9.034 8.5 12 8.5s4.449 0 5.518.804a4 4 0 0 1 .35.298c.97.921 1.213 2.384 1.7 5.31l.544 3.26c.18 1.08.27 1.62-.03 1.974-.299.354-.847.354-1.943.354H5.861c-1.096 0-1.644 0-1.944-.354-.3-.353-.209-.894-.029-1.975l.543-3.26Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M8.5 11V7.5a3.5 3.5 0 1 1 7 0V11"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bagAltDuotoneLine",
} as DefineComponent;
</script>
