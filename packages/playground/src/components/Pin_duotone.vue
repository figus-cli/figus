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
            d="M14.636 3.91c.653-.436.98-.654 1.335-.618.356.035.633.312 1.188.867l2.682 2.682c.555.555.832.832.867 1.188.036.356-.182.682-.618 1.335l-1.648 2.473c-.562.843-.843 1.264-1.067 1.714a8.005 8.005 0 0 0-.427 1.031c-.16.477-.26.974-.458 1.967l-.19.955-.002.006a1 1 0 0 1-1.547.625l-.006-.004-.026-.018a35 35 0 0 1-8.85-8.858l-.004-.006a1 1 0 0 1 .625-1.547l.006-.001.955-.191c.993-.199 1.49-.298 1.966-.458a7.997 7.997 0 0 0 1.032-.427c.45-.224.871-.505 1.714-1.067l2.473-1.648Z"
        />
        <path stroke="currentColor" stroke-width="1.4" d="m5 19 4.5-4.5" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pinDuotone",
} as DefineComponent;
</script>
