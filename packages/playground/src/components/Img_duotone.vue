<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="18" cy="7" r="1" stroke="currentColor" stroke-width="2" />
        <path
            fill="currentColor"
            fill-opacity=".24"
            fill-rule="evenodd"
            d="M12.242 18H5.186a1.2 1.2 0 0 1-1.012-1.844L8.988 8.59a1.2 1.2 0 0 1 2.024 0l2.57 4.037 1.42-2.13a1.2 1.2 0 0 1 1.996 0l3.758 5.636A1.2 1.2 0 0 1 19.758 18h-7.516Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "imgDuotone",
} as DefineComponent;
</script>
