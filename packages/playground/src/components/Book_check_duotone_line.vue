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
            d="M16 16H8.415c-1.184 0-1.776 0-2.299.202a2.999 2.999 0 0 0-.76.43c-.442.344-.747.852-1.356 1.868V7c0-1.886 0-2.828.586-3.414C5.172 3 6.114 3 8 3h8c1.886 0 2.828 0 3.414.586C20 4.172 20 5.114 20 7v5c0 1.886 0 2.828-.586 3.414C18.828 16 17.886 16 16 16Z"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="M20 12v5c0 1.886 0 2.828-.586 3.414C18.828 21 17.886 21 16 21H6.5a2.5 2.5 0 0 1 0-5H16c1.886 0 2.828 0 3.414-.586C20 14.828 20 13.886 20 12V7c0-1.886 0-2.828-.586-3.414C18.828 3 17.886 3 16 3H8c-1.886 0-2.828 0-3.414.586C4 4.172 4 5.114 4 7v11.5"
        />
        <path
            stroke="currentColor"
            stroke-width="1.2"
            d="m9 10 1.293 1.293a1 1 0 0 0 1.414 0L15 8"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bookCheckDuotoneLine",
} as DefineComponent;
</script>
