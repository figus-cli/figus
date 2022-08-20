<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="15"
            height="19"
            x="4.5"
            y="2.5"
            stroke="currentColor"
            rx="2.5"
        />
        <path fill="none" stroke="currentColor" d="M15 18H9" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tabletLight",
} as DefineComponent;
</script>
