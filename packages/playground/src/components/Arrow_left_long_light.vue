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
            d="M7 11.5a.5.5 0 0 0 0 1v-1Zm14 1a.5.5 0 0 0 0-1v1Zm-14 0h14v-1H7v1Z"
        />
        <path
            fill="currentColor"
            d="m2.357 11.786 3.431-2.059A.8.8 0 0 1 7 10.413v3.174a.8.8 0 0 1-1.212.686l-3.43-2.059a.25.25 0 0 1 0-.428Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "arrowLeftLongLight",
} as DefineComponent;
</script>
