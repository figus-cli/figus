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
            d="M12 4c5.254 0 7.489 3.45 8.404 5.819.338.875.507 1.312.209 1.746-.298.435-.825.435-1.879.435H5.266c-1.054 0-1.58 0-1.879-.434-.298-.435-.129-.872.21-1.747C4.51 7.45 6.746 4 12 4Z"
        />
        <circle cx="12" cy="11" r="4" fill="currentColor" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "viewAltDuotone",
} as DefineComponent;
</script>
