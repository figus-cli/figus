<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle
            cx="12"
            cy="8"
            r="4"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M15.591 16a10.47 10.47 0 0 0-1.402-.384 11.19 11.19 0 0 0-4.378 0c-1.434.288-2.756.857-3.828 1.661-1.073.805-1.867 1.824-2.275 2.968a.6.6 0 0 0 1.13.404c.318-.89.952-1.727 1.865-2.412.914-.685 2.066-1.187 3.345-1.444a9.973 9.973 0 0 1 2.509-.178A1.994 1.994 0 0 1 14 16h1.591Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M18 14v8m4-4h-8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAddDuotoneLine",
} as DefineComponent;
</script>
