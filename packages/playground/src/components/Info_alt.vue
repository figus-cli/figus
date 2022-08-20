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
            stroke-width="2"
            d="M10.5 12H12v4h2m-2-8h.01m1.553 12.863a9 9 0 0 0 7.224-6.915 9.001 9.001 0 0 0-1.196-6.784A9 9 0 0 0 7.163 4.41a9 9 0 0 0 6.399 16.453Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "infoAlt",
} as DefineComponent;
</script>
