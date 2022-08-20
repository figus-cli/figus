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
            d="M20 12c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C16.2 4 14.8 4 12 4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 4.545 6.73C4 7.8 4 9.2 4 12v6c0 .943 0 1.414.293 1.707C4.586 20 5.057 20 6 20h6c2.8 0 4.2 0 5.27-.545a4.999 4.999 0 0 0 2.185-2.185C20 16.2 20 14.8 20 12Z"
        />
        <path
            stroke="currentColor"
            stroke-linejoin="round"
            d="M8.5 12.5h7m-7 3h5"
        />
        <path stroke="currentColor" d="M17.5 3.5v6m-3-3h6" />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "chatPlusDuotone",
} as DefineComponent;
</script>
