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
            stroke-width="2"
            d="M9 18H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2M4 8h16M4 13h5"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M11.54 16.972a2 2 0 0 1 0-1.944l.676-1.213.712-1.19a2 2 0 0 1 1.684-.973L16 11.63l1.388.022a2 2 0 0 1 1.684.972l.713 1.191.674 1.213a2 2 0 0 1 0 1.944l-.674 1.213-.713 1.19a2 2 0 0 1-1.684.973L16 20.37l-1.388-.022a2 2 0 0 1-1.684-.972l-.712-1.191-.675-1.213Z"
        />
        <circle cx="16" cy="16" r="1" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "tableSettings",
} as DefineComponent;
</script>
