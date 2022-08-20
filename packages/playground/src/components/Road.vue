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
            d="m9.096 20.793 2.831-6.136c.023-.05.035-.075.051-.083a.05.05 0 0 1 .044 0c.016.008.027.033.05.083l2.832 6.136c.03.063.044.095.038.114a.05.05 0 0 1-.034.033c-.018.005-.05-.01-.112-.042l-2.76-1.38a.103.103 0 0 0-.027-.011.048.048 0 0 0-.018 0 .103.103 0 0 0-.027.01l-2.76 1.381c-.063.031-.094.047-.113.042a.05.05 0 0 1-.033-.033c-.006-.019.008-.05.037-.114ZM5 17 8 3m11 14L16 3m-4 7V8"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            d="M17 17h.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 15.48 21 14.92 21 13.8V6.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3H6.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v7.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 17 5.08 17 6.2 17H7"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "road",
} as DefineComponent;
</script>
