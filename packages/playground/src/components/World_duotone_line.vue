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
            cy="12"
            r="8"
            fill="currentColor"
            fill-opacity=".24"
            stroke="currentColor"
            stroke-width="1.2"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M18.572 6.421c-.724.782-1.685 1.424-2.805 1.872-1.12.448-2.365.69-3.634.706a10.27 10.27 0 0 1-3.664-.615C7.33 7.964 6.34 7.346 5.583 6.583m12.989 10.996c-.724-.782-1.685-1.424-2.805-1.872A10.17 10.17 0 0 0 12.133 15a10.272 10.272 0 0 0-3.664.615c-1.139.42-2.128 1.038-2.886 1.801M12 4v16m8-8H4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "worldDuotoneLine",
} as DefineComponent;
</script>
