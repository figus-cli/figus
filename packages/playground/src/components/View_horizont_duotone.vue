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
            d="M12.864 7.37a10 10 0 0 1-.143 9.523L4 12l8.864-4.63Z"
        />
        <path
            stroke="currentColor"
            d="M14.5 5.5c-2.781 3.708-9.86 6.127-10.877 6.46a.049.049 0 0 0-.005.092c1.001.446 8.097 3.663 10.882 6.448"
        />
        <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M13.55 9.033a10.002 10.002 0 0 1 0 5.933 3 3 0 0 1 0-5.933Z"
            clip-rule="evenodd"
        />
        <path
            stroke="currentColor"
            stroke-opacity=".24"
            d="M16.5 12h4m-4-2.5 4-1.5m-4 6.5 4 1.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "viewHorizontDuotone",
} as DefineComponent;
</script>
