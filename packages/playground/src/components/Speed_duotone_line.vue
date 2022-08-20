<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M9.5 15a2.5 2.5 0 0 1 3.457-2.31 2.501 2.501 0 0 1 1.353 1.353 2.5 2.5 0 0 1 .19.957"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="m13.5 12.5 2-3"
        />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M8.938 6.609A8 8 0 0 1 20 14v.5a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5V14a8 8 0 0 1 4.939-7.391ZM3 14a9 9 0 0 1 2.636-6.364A9 9 0 0 1 21 14v.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 14.5V14Z"
            clip-rule="evenodd"
        />
        <path stroke="currentColor" stroke-linejoin="round" d="M16.5 15.5h-9" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "speedDuotoneLine",
} as DefineComponent;
</script>
