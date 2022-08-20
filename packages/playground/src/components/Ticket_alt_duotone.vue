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
            d="M19 20.138V3.862a.5.5 0 0 0-.748-.435l-2.256 1.29a1 1 0 0 1-.992 0l-2.21-1.263a1.6 1.6 0 0 0-1.588 0l-2.21 1.262a1 1 0 0 1-.992 0L5.748 3.428A.5.5 0 0 0 5 3.86v16.277a.5.5 0 0 0 .748.434l2.256-1.288a1 1 0 0 1 .992 0l2.21 1.262a1.6 1.6 0 0 0 1.588 0l2.21-1.263a1 1 0 0 1 .992 0l2.256 1.29a.5.5 0 0 0 .748-.435Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M10 9h4m-4 6h4m-4-3h4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "ticketAltDuotone",
} as DefineComponent;
</script>
