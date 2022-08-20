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
            d="M2 10c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-4Zm5.739 6.447a7 7 0 0 1 8.522 0 7 7 0 0 1 2.5 3.741 1 1 0 0 1-1.931.518 5 5 0 0 0-7.874-2.673 5 5 0 0 0-1.786 2.673 1 1 0 1 1-1.931-.518 7 7 0 0 1 2.5-3.741ZM10 9a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm2-4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
            clip-rule="evenodd"
        />
        <rect
            width="19"
            height="19"
            x="2.5"
            y="2.5"
            stroke="currentColor"
            rx="3.5"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "userBoxFill",
} as DefineComponent;
</script>
