<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" stroke-width="2" d="M3 4h18" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M19 4H5v11.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 19 7.08 19 8.2 19h7.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C19 17.48 19 16.92 19 15.8V4Zm-8 11v-3.586l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.894-2.894a1.168 1.168 0 0 1 .057-.053A.998.998 0 0 1 12 8c.302 0 .573.134.756.346a1.168 1.168 0 0 1 .057.053l2.894 2.894a1 1 0 0 1-1.414 1.414L13 11.414V15a1 1 0 1 1-2 0Z"
            clip-rule="evenodd"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadListFill",
} as DefineComponent;
</script>
