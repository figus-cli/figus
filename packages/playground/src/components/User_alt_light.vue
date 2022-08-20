<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M4.85 16.948c.639-2.345 3.065-3.448 5.495-3.448h3.31c2.43 0 4.856 1.103 5.496 3.448a9.95 9.95 0 0 1 .295 1.554c.06.549-.394.998-.946.998h-13c-.552 0-1.005-.45-.946-.999a9.94 9.94 0 0 1 .295-1.553Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userAltLight",
} as DefineComponent;
</script>
