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
            d="M6 20h12m-9-8h6m-8 5 3.116-8.726c.786-2.2 1.18-3.3 1.884-3.3.705 0 1.098 1.1 1.883 3.3L17 17"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "sortAlfaLight",
} as DefineComponent;
</script>
