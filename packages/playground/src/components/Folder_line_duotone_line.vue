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
            stroke="currentColor"
            stroke-linejoin="round"
            stroke-width="1.2"
            d="M4.6 8c0-.96.001-1.62.068-2.115.064-.478.18-.712.342-.875.163-.163.397-.278.875-.342C6.381 4.6 7.04 4.6 8 4.6h.343c.867 0 1.133.01 1.364.107.232.096.428.276 1.04.889l.657.657.075.075c.505.505.875.875 1.354 1.074.48.199 1.004.198 1.717.198H16c.96 0 1.62.001 2.115.068.478.064.712.18.875.342.163.163.278.397.342.875.067.496.068 1.155.068 2.115v4c0 .96-.001 1.62-.068 2.115-.064.478-.18.712-.342.875-.163.163-.397.278-.875.342-.496.067-1.155.068-2.115.068H8c-.96 0-1.62-.001-2.115-.068-.478-.064-.712-.18-.875-.342-.163-.163-.278-.397-.342-.875C4.6 16.619 4.6 15.96 4.6 15V8Z"
        />
        <path
            stroke="currentColor"
            stroke-miterlimit="1.414"
            d="M4.5 11.5h15"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderLineDuotoneLine",
} as DefineComponent;
</script>
