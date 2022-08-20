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
            d="M6 11.657c0-.818 0-1.226.152-1.594.152-.368.441-.657 1.02-1.235l.656-.656c.578-.578.867-.868 1.235-1.02C9.431 7 9.84 7 10.657 7h2.686c.818 0 1.226 0 1.594.152.368.152.657.441 1.235 1.02l.656.656c.578.578.867.868 1.02 1.235.152.368.152.776.152 1.594V16c0 1.886 0 2.828-.586 3.414C16.828 20 15.886 20 14 20h-4c-1.886 0-2.828 0-3.414-.586C6 18.828 6 17.886 6 16v-4.343Z"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M9 7 6.139 5.093a.25.25 0 0 0-.278 0L3.254 6.83a.25.25 0 0 0-.038.385l2.577 2.577a.707.707 0 0 1 .207.5c0 .39.316.707.707.707h10.586a.707.707 0 0 0 .707-.707.707.707 0 0 1 .207-.5l2.577-2.577a.25.25 0 0 0-.038-.385L18.14 5.092a.25.25 0 0 0-.278 0L15 7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "boxOpen",
} as DefineComponent;
</script>
