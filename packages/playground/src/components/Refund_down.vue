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
            d="m16 20-.707.707.707.707.707-.707L16 20ZM4 15a1 1 0 1 0 2 0H4Zm6.293.707 5 5 1.414-1.414-5-5-1.414 1.414Zm6.414 5 5-5-1.414-1.414-5 5 1.414 1.414ZM17 20V9.5h-2V20h2ZM4 9.5V15h2V9.5H4ZM10.5 3A6.5 6.5 0 0 0 4 9.5h2A4.5 4.5 0 0 1 10.5 5V3ZM17 9.5A6.5 6.5 0 0 0 10.5 3v2A4.5 4.5 0 0 1 15 9.5h2Z"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "refundDown",
} as DefineComponent;
</script>
