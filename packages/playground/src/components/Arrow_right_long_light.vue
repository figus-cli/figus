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
            d="M17 11.5a.5.5 0 0 1 0 1v-1Zm-14 1a.5.5 0 0 1 0-1v1Zm14 0H3v-1h14v1Z"
        />
        <path
            fill="currentColor"
            d="m21.643 11.786-3.431-2.059a.8.8 0 0 0-1.212.686v3.174a.8.8 0 0 0 1.212.686l3.43-2.059a.25.25 0 0 0 0-.428Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowRightLongLight",
} as DefineComponent;
</script>
