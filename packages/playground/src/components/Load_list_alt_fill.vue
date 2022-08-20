<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path stroke="currentColor" stroke-width="2" d="M3 3h18" />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M19 3H5v14.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C6.52 21 7.08 21 8.2 21h4.56c.084 0 .126 0 .158-.016a.15.15 0 0 0 .066-.066c.016-.032.016-.074.016-.158V18.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C14.52 15 15.08 15 16.2 15h2.56c.084 0 .126 0 .158-.016a.15.15 0 0 0 .066-.066c.016-.032.016-.074.016-.158V3Zm-8 10V9.414l-1.293 1.293a1 1 0 0 1-1.414-1.414l2.894-2.894a1.168 1.168 0 0 1 .057-.053A.998.998 0 0 1 12 6c.302 0 .573.134.756.346a1.168 1.168 0 0 1 .057.053l2.894 2.894a1 1 0 0 1-1.414 1.414L13 9.414V13a1 1 0 1 1-2 0Z"
            clip-rule="evenodd"
        />
        <path
            fill="currentColor"
            d="m15.256 20.744 3.488-3.488a.15.15 0 0 0-.106-.256H15.5a.5.5 0 0 0-.5.5v3.138c0 .134.162.2.256.106Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "loadListAltFill",
} as DefineComponent;
</script>
