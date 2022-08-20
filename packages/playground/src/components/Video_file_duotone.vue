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
            fill-rule="evenodd"
            d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9h-3.5A2.5 2.5 0 0 1 13 6.5V3Zm5.818 5a1.999 1.999 0 0 0-.41-.587l-3.871-3.834a1.999 1.999 0 0 0-.537-.38V6.5A1.5 1.5 0 0 0 15.5 8h3.318Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="M10 16.117v-4.234a.5.5 0 0 1 .757-.429l3.528 2.117a.5.5 0 0 1 0 .858l-3.528 2.117a.5.5 0 0 1-.757-.43Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "videoFileDuotone",
} as DefineComponent;
</script>
