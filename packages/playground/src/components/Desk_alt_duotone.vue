<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <rect
            width="12"
            height="15"
            x="6"
            y="5"
            fill="currentColor"
            fill-opacity=".24"
            rx="2"
        />
        <path stroke="currentColor" d="M9.5 9.5h5m-5 3h5m-5 3h5" />
        <path
            fill="currentColor"
            d="M8 4.87A.87.87 0 0 1 8.87 4h6.26a.87.87 0 0 1 .87.87.13.13 0 0 1-.13.13h-.37a.5.5 0 0 0-.5.5v.35a.15.15 0 0 1-.15.15h-5.7A.15.15 0 0 1 9 5.85V5.5a.5.5 0 0 0-.5-.5h-.37A.13.13 0 0 1 8 4.87Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "deskAltDuotone",
} as DefineComponent;
</script>
