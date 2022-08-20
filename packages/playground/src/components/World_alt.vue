<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="2" />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M18.572 7.206c-.724.847-1.685 1.543-2.805 2.028a9.492 9.492 0 0 1-3.634.765 9.567 9.567 0 0 1-3.664-.666C7.33 8.877 6.34 8.209 5.583 7.38m12.989 9.413c-.724-.847-1.685-1.543-2.805-2.028A9.49 9.49 0 0 0 12.133 14a9.565 9.565 0 0 0-3.664.666c-1.139.456-2.128 1.124-2.886 1.952M12 4v16"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "worldAlt",
} as DefineComponent;
</script>
