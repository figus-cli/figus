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
            stroke-width="1.4"
            d="m4.45 13.908 6.953 6.532c.24.224.36.337.5.365a.5.5 0 0 0 .193 0c.142-.028.261-.14.5-.365l6.953-6.532a5.203 5.203 0 0 0 .549-6.982l-.31-.399c-1.968-2.536-5.918-2.111-7.301.787a.54.54 0 0 1-.974 0C10.13 4.416 6.18 3.99 4.212 6.527l-.31.4a5.203 5.203 0 0 0 .549 6.981Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "favoriteDuotone",
} as DefineComponent;
</script>
