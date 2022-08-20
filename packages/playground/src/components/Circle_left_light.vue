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
            d="m10 15-.354-.354-.353.354.354.354L10 15Zm3.646-4.354-4 4 .708.708 4-4-.708-.708Zm-4 4.708 4 4 .708-.708-4-4-.708.708Z"
        />
        <path
            stroke="currentColor"
            d="M4.206 12.75c-1.016-.88-1.407-1.905-1.109-2.91.298-1.004 1.266-1.928 2.748-2.623 1.482-.695 3.39-1.118 5.414-1.202 2.024-.083 4.045.178 5.735.741 1.69.564 2.948 1.396 3.572 2.363.623.966.574 2.01-.139 2.96-.713.951-2.048 1.754-3.788 2.277-1.74.524-3.784.737-5.798.606"
        />
    </svg>
</template>

<script lang="ts">
import type { DefineComponent } from "vue";
export default {
    name: "circleLeftLight",
} as DefineComponent;
</script>
