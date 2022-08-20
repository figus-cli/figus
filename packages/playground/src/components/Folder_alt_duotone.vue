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
            d="M8 7H3v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9l-1 1h-9L8 7Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M3 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C5.28 3 6.12 3 7.8 3h8.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C21 5.28 21 6.12 21 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C18.72 21 17.88 21 16.2 21H7.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C3 18.72 3 17.88 3 16.2V7.8Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M3 7h3c.981 0 1.472 0 1.894.211.423.211.717.604 1.306 1.389l.6.8c.589.785.883 1.178 1.306 1.389.422.211.913.211 1.894.211h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 9.398 21 8.932 21 8"
        />
        <path stroke="currentColor" stroke-width="1.2" d="M7 16h8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderAltDuotone",
} as DefineComponent;
</script>
