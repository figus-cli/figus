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
            stroke-width="2"
            d="M12 18a2 2 0 0 1-1.932-1.482"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M10.424 4.679c.631-1.073.947-1.61 1.398-1.69a1 1 0 0 1 .356 0c.451.08.767.617 1.398 1.69l1.668 2.836a27.186 27.186 0 0 1 2.708 6.315C18.977 17.423 16.28 21 12.543 21h-1.086c-3.737 0-6.435-3.577-5.408-7.17a27.187 27.187 0 0 1 2.707-6.315l1.668-2.836Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "water",
} as DefineComponent;
</script>
