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
            stroke-linejoin="round"
            d="M11 10.5h.5a.5.5 0 0 1 .5.5v4a.5.5 0 0 0 .5.5h.5m-1-7h.01"
        />
        <path
            fill="none"
            stroke="currentColor"
            d="M13.39 19.878a8 8 0 0 0 6.42-6.147 8 8 0 0 0-3.221-8.284 8 8 0 1 0-3.2 14.431Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "infoAltLight",
} as DefineComponent;
</script>
