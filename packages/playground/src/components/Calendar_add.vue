<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="18"
            height="15"
            x="3"
            y="6"
            stroke="currentColor"
            stroke-width="2"
            rx="2"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M4 11h16m-10 5h4m-2-2v4M8 3v4m8-4v4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "calendarAdd",
} as DefineComponent;
</script>
