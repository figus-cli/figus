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
            fill-rule="evenodd"
            d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10a9.977 9.977 0 0 1-3.443 7.55A7 7 0 0 0 7.74 16.446a7 7 0 0 0-2.296 3.104A9.977 9.977 0 0 1 2 12Zm14.83 8.706a.947.947 0 0 0 .013.045A9.955 9.955 0 0 1 12 22a9.955 9.955 0 0 1-4.843-1.249.947.947 0 0 0 .013-.045 5 5 0 0 1 7.874-2.673 5 5 0 0 1 1.786 2.673ZM10 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
            clip-rule="evenodd"
        />
        <rect
            width="19"
            height="19"
            x="2.5"
            y="2.5"
            stroke="currentColor"
            rx="9.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userCircle",
} as DefineComponent;
</script>
