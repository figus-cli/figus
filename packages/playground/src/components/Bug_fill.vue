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
            stroke="currentColor"
            stroke-width="2"
            d="M7 14.333c0-1.246 0-1.869.268-2.333A2.001 2.001 0 0 1 8 11.268C8.464 11 9.087 11 10.333 11h3.334c1.246 0 1.869 0 2.333.268.304.176.556.428.732.732.268.464.268 1.087.268 2.333V16c0 .93 0 1.394-.077 1.78a4 4 0 0 1-3.143 3.143C13.394 21 12.93 21 12 21s-1.394 0-1.78-.077a4 4 0 0 1-3.143-3.143C7 17.394 7 16.93 7 16v-1.667ZM9 9c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 6 11.068 6 12 6c.932 0 1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 7.602 15 8.068 15 9v2H9V9Z"
        />
        <path
            stroke="currentColor"
            stroke-width="2"
            d="M12 11v4m3-12-2 3M9 3l2 3M7 16H2m20 0h-5m3-7v1a3 3 0 0 1-3 3m3 9a3 3 0 0 0-3-3M4 9v1a3 3 0 0 0 3 3m-3 9a3 3 0 0 1 3-3"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "bugFill",
} as DefineComponent;
</script>
