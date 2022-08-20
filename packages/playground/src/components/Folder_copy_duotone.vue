<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <path
            stroke="currentColor"
            stroke-miterlimit="1.414"
            stroke-opacity=".24"
            d="M13 19.5h.5a2 2 0 0 0 2-2V17M6 19.5h-.5a2 2 0 0 1-2-2V17M6 7.5h-.5a2 2 0 0 0-2 2v.5m7.5 9.5H8M3.5 12v3"
        />
        <path
            fill="currentColor"
            d="M8 6.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C9.52 3 10.08 3 11.2 3h1.301c.551 0 .827 0 1.082.069a2 2 0 0 1 .631.295c.216.153.393.364.745.787L16.5 6h2.3c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C22 7.52 22 8.08 22 9.2v2.6c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C20.48 15 19.92 15 18.8 15h-7.6c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C8 13.48 8 12.92 8 11.8V6.2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderCopyDuotone",
} as DefineComponent;
</script>
