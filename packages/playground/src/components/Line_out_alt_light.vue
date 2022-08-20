<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="6"
            height="6"
            x="9"
            y="15"
            stroke="currentColor"
            rx="2"
            transform="rotate(90 9 15)"
        />
        <path fill="none" stroke="currentColor" d="m18 3 3 4-3 4" />
        <path
            fill="none"
            stroke="currentColor"
            d="M21 7h-7c-3.771 0-5.657 0-6.828 1.172C6 9.343 6 11.229 6 15"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "lineOutAltLight",
} as DefineComponent;
</script>
