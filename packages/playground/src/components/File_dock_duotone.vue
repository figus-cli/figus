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
            fill-opacity=".24"
            d="M5 5a2 2 0 0 1 2-2h4.75a.25.25 0 0 1 .25.25V8a2 2 0 0 0 2 2h4.75a.25.25 0 0 1 .25.25V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5Z"
        />
        <path
            fill="currentColor"
            d="M13 8V3.604a.25.25 0 0 1 .427-.177l5.146 5.146a.25.25 0 0 1-.177.427H14a1 1 0 0 1-1-1Z"
        />
        <path stroke="currentColor" d="M12 11.5v6m-3-3h6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "fileDockDuotone",
} as DefineComponent;
</script>
