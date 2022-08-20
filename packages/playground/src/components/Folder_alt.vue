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
            d="M3 7c0-1.886 0-2.828.586-3.414C4.172 3 5.114 3 7 3h10c1.886 0 2.828 0 3.414.586C21 4.172 21 5.114 21 7v10c0 1.886 0 2.828-.586 3.414C19.828 21 18.886 21 17 21H7c-1.886 0-2.828 0-3.414-.586C3 19.828 3 18.886 3 17V7Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M3 7h3c.981 0 1.472 0 1.894.211.423.211.717.604 1.306 1.389l.6.8c.589.785.883 1.178 1.306 1.389.422.211.913.211 1.894.211h5c.932 0 1.398 0 1.765-.152a2 2 0 0 0 1.083-1.083C21 9.398 21 8.932 21 8"
        />
        <path fill="none" stroke="currentColor" stroke-width="2" d="M7 16h8" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "folderAlt",
} as DefineComponent;
</script>
