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
            d="M20 10H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2Z"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="m6.198 12.78.604 5.44A2 2 0 0 0 8.79 20h6.42a2 2 0 0 0 1.988-1.78l.604-5.44A2 2 0 0 1 19.79 11H4.21a2 2 0 0 1 1.988 1.78ZM11 14a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Zm4 0a1 1 0 1 0-2 0v3a1 1 0 1 0 2 0v-3Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="2" d="M8 5 6 9m10-4 2 4" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "basketAlt_2",
} as DefineComponent;
</script>
