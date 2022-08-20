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
            stroke-linejoin="round"
            d="M21 10V9c0-.93 0-1.395-.102-1.776a3 3 0 0 0-2.121-2.122C18.394 5 17.93 5 17 5M3 10V9c0-.93 0-1.395.102-1.776a3 3 0 0 1 2.122-2.122C5.604 5 6.07 5 7 5m14 9v1c0 .93 0 1.395-.102 1.776a3 3 0 0 1-2.121 2.122C18.394 19 17.93 19 17 19M3 14v1c0 .93 0 1.395.102 1.776a3 3 0 0 0 2.122 2.122C5.604 19 6.07 19 7 19"
        />
        <path
            fill="none"
            stroke="currentColor"
            stroke-linejoin="round"
            d="M12 15V9m-4 5v-4m8 4v-4"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "scanAlt_2Light",
} as DefineComponent;
</script>
