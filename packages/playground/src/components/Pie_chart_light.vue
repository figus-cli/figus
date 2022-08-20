<template>
    <svg
        fill="currentColor"
        viewBox="0 0 24 24"
        width="1em"
        height="1em"
        v-bind="$attrs"
    >
        <circle cx="12" cy="12" r="9" stroke="currentColor" />
        <path
            fill="none"
            stroke="currentColor"
            d="M12 12h9m-9-9v8.938c0 .04.016.078.044.106L18 18"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "pieChartLight",
} as DefineComponent;
</script>
