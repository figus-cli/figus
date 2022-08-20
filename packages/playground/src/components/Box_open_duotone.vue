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
            stroke-opacity=".24"
            stroke-width="1.2"
            d="M9 7 6.139 5.093a.25.25 0 0 0-.278 0L3.254 6.83a.25.25 0 0 0-.038.385l2.577 2.577a.707.707 0 0 1 .207.5c0 .39.316.707.707.707h10.586a.707.707 0 0 0 .707-.707.707.707 0 0 1 .207-.5l2.577-2.577a.25.25 0 0 0-.038-.385L18.14 5.092a.25.25 0 0 0-.278 0L15 7"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="1.2"
            d="m6 10 1.828-1.828c.578-.578.867-.868 1.235-1.02C9.431 7 9.84 7 10.657 7h2.686c.818 0 1.226 0 1.594.152.368.152.657.441 1.235 1.02L18 10v6c0 1.886 0 2.828-.586 3.414C16.828 20 15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586C6 18.828 6 17.886 6 16v-6Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxOpenDuotone",
} as DefineComponent;
</script>
